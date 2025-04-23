/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrinho } from './entities/carrinho.entity';
import { CarrinhoService } from './carrinho.service';
import { CarrinhoController } from './carrinho.controller';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Fruta } from 'src/fruta/entities/fruta.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Carrinho, Cliente, Fruta]),
  ],
  providers: [CarrinhoService],
  controllers: [CarrinhoController],
})
export class CarrinhoModule {}
