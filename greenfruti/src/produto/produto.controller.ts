/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ProdutosService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/user/entities/user.entity';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('produtos')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    try {
      const produto = await this.produtosService.create(createProdutoDto);
      return {
        message: 'Produto criado com sucesso!',
        data: produto,
      };
    } catch (error) {
      throw new HttpException(
        { message: 'Erro ao criar produto', error: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  @Roles(UserRole.USER, UserRole.MANAGER, UserRole.ADMIN)
  async findAll(@Query('categoria') categoria?: string) {
    const produtos = await this.produtosService.findAll(categoria);
    return {
      message: 'Lista de produtos carregada com sucesso!',
      total: produtos.length,
      data: produtos,
    };
  }

  @Get(':id')
  @Roles(UserRole.USER, UserRole.MANAGER, UserRole.ADMIN)
  async findOne(@Param('id') id: string) {
    const produto = await this.produtosService.findOne(+id);
    if (!produto) {
      throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);
    }
    return {
      message: 'Produto encontrado com sucesso!',
      data: produto,
    };
  }

  @Put(':id')
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  async update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    try {
      const produtoAtualizado = await this.produtosService.update(+id, updateProdutoDto);
      return {
        message: 'Produto atualizado com sucesso!',
        data: produtoAtualizado,
      };
    } catch (error) {
      throw new HttpException(
        { message: 'Erro ao atualizar produto', error: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  async remove(@Param('id') id: string) {
    try {
      await this.produtosService.remove(+id);
      return {
        message: 'Produto removido com sucesso!',
      };
    } catch (error) {
      throw new HttpException(
        { message: 'Erro ao remover produto', error: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
