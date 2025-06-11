/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDonoLojaDto } from './dto/create-dono-loja.dto';
import { UpdateDonoLojaDto } from './dto/update-dono-loja.dto';
import { DonoLoja } from './entities/dono-loja.entity';

@Injectable()
export class DonoLojaService {
  constructor(
    @InjectRepository(DonoLoja)
    private donoLojaRepo: Repository<DonoLoja>,
  ) {}

  async create(createDonoLojaDto: CreateDonoLojaDto): Promise<DonoLoja> {
    const novoDono = this.donoLojaRepo.create(createDonoLojaDto);
    return await this.donoLojaRepo.save(novoDono);
  }

  async findAll(): Promise<DonoLoja[]> {
    return await this.donoLojaRepo.find({
      relations: ['loja', 'user'],
    });
  }

  async findAllByUser(userId: number): Promise<DonoLoja[]> {
    return await this.donoLojaRepo.find({
      where: { user: { id: userId } },
      relations: ['loja', 'user'],
    });
  }

  async findOne(id: number): Promise<DonoLoja | null> {
    return await this.donoLojaRepo.findOne({
      where: { id },
      relations: ['loja', 'user'],
    });
  }

  async update(id: number, updateDonoLojaDto: UpdateDonoLojaDto): Promise<DonoLoja | null> {
    await this.donoLojaRepo.update(id, updateDonoLojaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.donoLojaRepo.delete(id);
  }
}
