/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avaliacao } from './entities/avaliacao.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Fruta } from 'src/fruta/entities/fruta.entity';
import { AvaliacaoService } from './avaliacao.service';
import { AvaliacaoController } from './avaliacao.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Avaliacao, Cliente, Pedido, Fruta])],
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService],
})
export class AvaliacaoModule {}
