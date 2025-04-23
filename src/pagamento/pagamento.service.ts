/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';
import { Pagamento } from './entities/pagamento.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';

@Injectable()
export class PagamentosService {
  constructor(
    @InjectRepository(Pagamento)
    private pagamentoRepo: Repository<Pagamento>,
    @InjectRepository(Pedido)
    private pedidoRepo: Repository<Pedido>,
  ) {}

  async create(dto: CreatePagamentoDto) {
    const pedido = await this.pedidoRepo.findOneBy({ id: dto.pedidoId });

    if (!pedido) {
      throw new NotFoundException('Pedido não encontrado');
    }

    const pagamento = this.pagamentoRepo.create({
      metodo: dto.formaPagamento,
      valor: dto.valorPago,
      status: dto.status,
      pedido,
    });

    try {
      return await this.pagamentoRepo.save(pagamento);
    } catch (error) {
      console.error('Erro ao salvar o pagamento:', error);
      throw new Error('Erro ao salvar o pagamento');
    }
  }

  async findAll() {
    return this.pagamentoRepo.find({ relations: ['pedido'] });
  }

  async findOne(id: number) {
    const pagamento = await this.pagamentoRepo.findOne({
      where: { id },
      relations: ['pedido'],
    });

    if (!pagamento) {
      throw new NotFoundException('Pagamento não encontrado');
    }

    return pagamento;
  }

  async update(id: number, dto: UpdatePagamentoDto) {
    const pagamento = await this.findOne(id);
    if (!pagamento) {
      throw new NotFoundException('Pagamento não encontrado');
    }
  
    if (dto.formaPagamento !== undefined) pagamento.metodo = dto.formaPagamento;
    if (dto.valorPago !== undefined) pagamento.valor = dto.valorPago; 
    if (dto.status !== undefined) pagamento.status = dto.status;
  
    return this.pagamentoRepo.save(pagamento);
  }
  

  async remove(id: number) {
    const pagamento = await this.findOne(id);
    await this.pagamentoRepo.delete(pagamento.id);
  }
}
