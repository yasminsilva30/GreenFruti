/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';

@Controller('carrinhos')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  @Post()
  async create(@Body() dto: CreateCarrinhoDto) {
    return this.carrinhoService.create(dto);
  }

  @Get()
  async findAll() {
    return this.carrinhoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.carrinhoService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateCarrinhoDto) {
    return this.carrinhoService.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.carrinhoService.remove(+id);
  }
}
