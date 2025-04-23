/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { DonoLojaService } from './dono-loja.service';
import { CreateDonoLojaDto } from './dto/create-dono-loja.dto';
import { UpdateDonoLojaDto } from './dto/update-dono-loja.dto';
import { plainToInstance } from 'class-transformer';
import { DonoLoja } from './entities/dono-loja.entity';

@Controller('donos-loja')
export class DonoLojaController {
  constructor(private readonly donoLojaService: DonoLojaService) {}

  @Post()
  async create(@Body() createDonoLojaDto: CreateDonoLojaDto) {
    const dono = await this.donoLojaService.create(createDonoLojaDto);
    return plainToInstance(DonoLoja, dono, { excludeExtraneousValues: true });
  }

  @Get()
  async findAll() {
    const donos = await this.donoLojaService.findAll();
    return donos.map((dono) =>
      plainToInstance(DonoLoja, dono, { excludeExtraneousValues: true }),
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const dono = await this.donoLojaService.findOne(+id);
    return plainToInstance(DonoLoja, dono, { excludeExtraneousValues: true });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDonoLojaDto: UpdateDonoLojaDto,
  ) {
    const dono = await this.donoLojaService.update(+id, updateDonoLojaDto);
    return plainToInstance(DonoLoja, dono, { excludeExtraneousValues: true });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donoLojaService.remove(+id);
  }
}
