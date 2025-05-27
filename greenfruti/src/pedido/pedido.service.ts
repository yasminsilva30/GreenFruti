/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Pagamento } from 'src/pagamento/entities/pagamento.entity';
import { Entrega } from 'src/entrega/entities/entrega.entity';
import { Carrinho } from 'src/carrinho/entities/carrinho.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepo: Repository<Pedido>,
    @InjectRepository(Cliente)
    private clienteRepo: Repository<Cliente>,
    @InjectRepository(Pagamento)
    private pagamentoRepo: Repository<Pagamento>,
    @InjectRepository(Entrega)
    private entregaRepo: Repository<Entrega>,
    @InjectRepository(Carrinho)
    private carrinhoRepo: Repository<Carrinho>,
  ) {}

  async create(dto: CreatePedidoDto): Promise<Pedido> {
    const cliente = await this.clienteRepo.findOne({
      where: { id: dto.clienteId },
    });

    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }

    let carrinhos: Carrinho[] = [];

    if (dto.carrinhos && dto.carrinhos.length) {
      carrinhos = await this.carrinhoRepo.findByIds(dto.carrinhos);
    } else {
      carrinhos = await this.carrinhoRepo.find({
        where: { cliente: { id: dto.clienteId }, pedido: IsNull() },
      });
    }

    if (!carrinhos.length) {
      throw new NotFoundException('Nenhum item no carrinho para criar o pedido');
    }

    const total = carrinhos.reduce((acc, item) => acc + item.precoTotal, 0);

    const pedido = this.pedidoRepo.create({
      cliente,
      total,
    });

    if (dto.pagamentoId) {
      const pagamento = await this.pagamentoRepo.findOne({
        where: { id: dto.pagamentoId },
      });
      if (!pagamento) {
        throw new NotFoundException('Pagamento não encontrado');
      }
      pedido.pagamento = pagamento;
    }

    if (dto.entregaId) {
      const entrega = await this.entregaRepo.findOne({
        where: { id: dto.entregaId },
      });
      if (!entrega) {
        throw new NotFoundException('Entrega não encontrada');
      }
      pedido.entrega = entrega;
    }

    const savedPedido = await this.pedidoRepo.save(pedido);

    for (const item of carrinhos) {
      item.pedido = savedPedido;
      await this.carrinhoRepo.save(item);
    }

    return this.findOne(savedPedido.id);
  }

  findAll(): Promise<Pedido[]> {
    return this.pedidoRepo.find({
      relations: ['cliente', 'pagamento', 'entrega', 'carrinhos'],
    });
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepo.findOne({
      where: { id },
      relations: ['cliente', 'pagamento', 'entrega', 'carrinhos'],
    });

    if (!pedido) {
      throw new NotFoundException('Pedido não encontrado');
    }

    return pedido;
  }

  async update(id: number, dto: UpdatePedidoDto): Promise<Pedido> {
    const pedido = await this.findOne(id);
    if (dto.total !== undefined) pedido.total = dto.total;
    return this.pedidoRepo.save(pedido);
  }

  remove(id: number): Promise<void> {
    return this.pedidoRepo.delete(id).then(() => undefined);
  }
}
