/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entrega } from './entities/entrega.entity';
import { CreateEntregaDto } from './dto/create-entrega.dto';
import { UpdateEntregaDto } from './dto/update-entrega.dto';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Motoboy } from 'src/motoboy/entities/motoboy.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';

@Injectable()
export class EntregaService {
  constructor(
    @InjectRepository(Entrega)
    private entregaRepository: Repository<Entrega>,
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
    @InjectRepository(Motoboy)
    private motoboyRepository: Repository<Motoboy>,
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
  ) {}

  async create(dto: CreateEntregaDto) {
    const pedido = await this.pedidoRepository.findOneBy({ id: dto.pedidoId });
    const motoboy = await this.motoboyRepository.findOneBy({ id: dto.motoboyId });
    const endereco = await this.enderecoRepository.findOneBy({ id: dto.enderecoId });

    if (!pedido) {
      throw new NotFoundException('Pedido não encontrado');
    }

    if (!motoboy) {
      throw new NotFoundException('Motoboy não encontrado');
    }

    if (!endereco) {
      throw new NotFoundException('Endereço não encontrado');
    }

    const entrega = new Entrega();
    entrega.pedido = pedido;
    entrega.motoboy = motoboy;
    entrega.endereco = endereco;
    entrega.status = dto.status || 'pendente';
    entrega.dataEntrega = new Date(dto.dataEntrega || '2023-01-01');

    return this.entregaRepository.save(entrega);
  }

  async update(id: number, dto: UpdateEntregaDto) {
    const entrega = await this.entregaRepository.findOne({
      where: { id },
      relations: ['motoboy', 'endereco'],
    });

    if (!entrega) {
      throw new NotFoundException('Entrega não encontrada');
    }

    if (dto.status) {
      entrega.status = dto.status || 'default-status';

    }

    if (dto.dataEntrega) {
      entrega.dataEntrega = new Date(dto.dataEntrega);
    }

    if (dto.motoboyId) {
      const motoboy = await this.motoboyRepository.findOne({ where: { id: dto.motoboyId } });
      if (!motoboy) {
        throw new NotFoundException('Motoboy não encontrado');
      }
      entrega.motoboy = motoboy;
    }

    if (dto.enderecoId) {
      const endereco = await this.enderecoRepository.findOne({ where: { id: dto.enderecoId } });
      if (!endereco) {
        throw new NotFoundException('Endereço não encontrado');
      }
      entrega.endereco = endereco;
    }

    return this.entregaRepository.save(entrega);
  }

  async findAll(): Promise<Entrega[]> {
    return this.entregaRepository.find({
      relations: ['motoboy', 'endereco', 'pedido'],
    });
  }
  
  async findOne(id: number): Promise<Entrega> {
    const entrega = await this.entregaRepository.findOne({
      where: { id },
      relations: ['motoboy', 'endereco', 'pedido'],
    });
  
    if (!entrega) {
      throw new NotFoundException('Entrega não encontrada');
    }
  
    return entrega;
  }
  
  async remove(id: number): Promise<void> {
    const entrega = await this.entregaRepository.findOneBy({ id });
  
    if (!entrega) {
      throw new NotFoundException('Entrega não encontrada');
    }
  
    await this.entregaRepository.delete(id);
  }
  
}
