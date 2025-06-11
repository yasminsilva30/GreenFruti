/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EstoquesService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';

import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/user/entities/user.entity';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('estoques')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles(UserRole.MANAGER, UserRole.ADMIN)
export class EstoquesController {
  constructor(private readonly estoquesService: EstoquesService) {}

  @Post()
  async create(@Body() createEstoqueDto: CreateEstoqueDto) {
    try {
      return await this.estoquesService.create(createEstoqueDto);
    } catch (error) {
      console.error('Erro ao criar estoque:', error);
      throw error;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.estoquesService.findAll();
    } catch (error) {
      console.error('Erro ao buscar todos os estoques:', error);
      throw error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.estoquesService.findOne(+id);
    } catch (error) {
      console.error(`Erro ao buscar estoque com ID ${id}:`, error);
      throw error;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEstoqueDto: UpdateEstoqueDto) {
    try {
      return await this.estoquesService.update(+id, updateEstoqueDto);
    } catch (error) {
      console.error(`Erro ao atualizar estoque com ID ${id}:`, error);
      throw error;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.estoquesService.remove(+id);
    } catch (error) {
      console.error(`Erro ao remover estoque com ID ${id}:`, error);
      throw error;
    }
  }
}
