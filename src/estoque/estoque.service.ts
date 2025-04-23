/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { Estoque } from './entities/estoque.entity';
import { Fruta } from 'src/fruta/entities/fruta.entity';
import { Loja } from 'src/loja/entities/loja.entity';

@Injectable()
export class EstoquesService {
  constructor(
    @InjectRepository(Estoque)
    private estoqueRepo: Repository<Estoque>,
    @InjectRepository(Fruta)
    private frutaRepo: Repository<Fruta>,
    @InjectRepository(Loja)
    private lojaRepo: Repository<Loja>,
  ) {}

  async create(createEstoqueDto: CreateEstoqueDto) {
    const fruta = await this.frutaRepo.findOne({ where: { id: createEstoqueDto.frutaId } });
    const loja = await this.lojaRepo.findOne({ where: { id: createEstoqueDto.lojaId } });

    if (!fruta) {
      throw new NotFoundException(`Fruta com ID ${createEstoqueDto.frutaId} não encontrada.`);
    }

    if (!loja) {
      throw new NotFoundException(`Loja com ID ${createEstoqueDto.lojaId} não encontrada.`);
    }

    const estoque = this.estoqueRepo.create(createEstoqueDto);
    return this.estoqueRepo.save(estoque);
  }

  async findAll() {
    return this.estoqueRepo.find();
  }

  async findOne(id: number) {
    const estoque = await this.estoqueRepo.findOne({ where: { id } });
    if (!estoque) {
      throw new NotFoundException(`Estoque com ID ${id} não encontrado.`);
    }
    return estoque;
  }

  async update(id: number, updateEstoqueDto: UpdateEstoqueDto) {
    const estoque = await this.estoqueRepo.findOne({ where: { id } });
    if (!estoque) {
      throw new NotFoundException(`Estoque com ID ${id} não encontrado.`);
    }

    return this.estoqueRepo.save({ ...estoque, ...updateEstoqueDto });
  }

  async remove(id: number) {
    const estoque = await this.estoqueRepo.findOne({ where: { id } });
    if (!estoque) {
      throw new NotFoundException(`Estoque com ID ${id} não encontrado.`);
    }
    return this.estoqueRepo.remove(estoque);
  }
}
