/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrinho } from './entities/carrinho.entity';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Produto } from 'src/produto/entities/produto.entity';

@Injectable()
export class CarrinhoService {
  constructor(
    @InjectRepository(Carrinho)
    private carrinhoRepository: Repository<Carrinho>,
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async create(dto: CreateCarrinhoDto) {
    const cliente = await this.clienteRepository.findOne({ where: { id: dto.clienteId } });
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado...');
    }
  
    const produto = await this.produtoRepository.findOne({ where: { id: dto.produtoId } });
    if (!produto) {
      throw new NotFoundException('Produto não encontrado...');
    }
  
    const precoTotal = produto.preco * dto.quantidade;
  
    const carrinho = this.carrinhoRepository.create({
      cliente,
      produto,
      quantidade: dto.quantidade,
      precoTotal,
    });    
  
    return this.carrinhoRepository.save(carrinho);
  }
  
  async findAll() {
    return this.carrinhoRepository.find({ relations: ['cliente', 'produto'] });
  }

  async findOne(id: number) {
    const carrinho = await this.carrinhoRepository.findOne({
      where: { id },
      relations: ['cliente', 'produto'],
    });
    if (!carrinho) {
      throw new NotFoundException(`Carrinho com id ${id} não encontrado`);
    }
    return carrinho;
  }

  async update(id: number, dto: UpdateCarrinhoDto) {
    const carrinho = await this.findOne(id);
    await this.carrinhoRepository.update(id, dto);
    return { ...carrinho, ...dto };
  }

  async remove(id: number) {
    const carrinho = await this.findOne(id);
    if (!carrinho) {
      throw new NotFoundException(`Carrinho com id ${id} não encontrado`);
    }

    await this.carrinhoRepository.delete(id);
    return { message: `Carrinho com id ${id} foi removido com sucesso` };
  }
}
