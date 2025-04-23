import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFrutaDto } from './dto/create-fruta.dto';
import { UpdateFrutaDto } from './dto/update-fruta.dto';
import { Fruta } from './entities/fruta.entity';

@Injectable()
export class FrutasService {
  constructor(
    @InjectRepository(Fruta)
    private frutaRepo: Repository<Fruta>,
  ) {}

  create(createFrutaDto: CreateFrutaDto) {
    const fruta = this.frutaRepo.create(createFrutaDto);
    return this.frutaRepo.save(fruta);
  }

  findAll() {
    return this.frutaRepo.find();
  }

  findOne(id: number) {
    return this.frutaRepo.findOne({ where: { id } });
  }

  update(id: number, updateFrutaDto: UpdateFrutaDto) {
    return this.frutaRepo.update(id, updateFrutaDto);
  }

  remove(id: number) {
    return this.frutaRepo.delete(id);
  }
}
