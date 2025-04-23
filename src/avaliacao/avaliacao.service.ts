/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Avaliacao } from './entities/avaliacao.entity';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Fruta } from 'src/fruta/entities/fruta.entity';

@Injectable()
export class AvaliacaoService {
  constructor(
    @InjectRepository(Avaliacao)
    private avaliacaoRepository: Repository<Avaliacao>,
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
    @InjectRepository(Fruta)
    private frutaRepository: Repository<Fruta>,
  ) {}

  async create(dto: CreateAvaliacaoDto) {
    const cliente = await this.clienteRepository.findOneBy({
      id: dto.clienteId,
    });
  
    const pedido = dto.pedidoId
      ? await this.pedidoRepository.findOneBy({ id: dto.pedidoId })
      : null;
  
    const fruta = dto.frutaId
      ? await this.frutaRepository.findOneBy({ id: dto.frutaId })
      : null;
  
    if (!cliente) {
      throw new Error('Cliente não encontrado');
    }
  
    if (dto.pedidoId && !pedido) {
      throw new Error('Pedido não encontrado');
    }
  
    if (dto.frutaId && !fruta) {
      throw new Error('Fruta não encontrada');
    }
  
    const avaliacao = new Avaliacao();
    avaliacao.cliente = cliente;
  
    if (pedido) {
      avaliacao.pedido = pedido;
    }
  
    if (fruta) {
      avaliacao.fruta = fruta;
    }
  
    avaliacao.nota = dto.nota;
  
    if (!dto.comentario) {
      throw new Error('Comentário não pode ser vazio');
    }
    avaliacao.comentario = dto.comentario;
  
    return this.avaliacaoRepository.save(avaliacao);
  }  

  findAll() {
    return this.avaliacaoRepository.find({
      relations: ['cliente', 'pedido', 'fruta'],
    });
  }

  findOne(id: number) {
    return this.avaliacaoRepository.findOne({
      where: { id },
      relations: ['cliente', 'pedido', 'fruta'],
    });
  }

  update(id: number, dto: UpdateAvaliacaoDto) {
    return this.avaliacaoRepository.update(id, dto);
  }

  remove(id: number) {
    return this.avaliacaoRepository.delete(id);
  }
}
