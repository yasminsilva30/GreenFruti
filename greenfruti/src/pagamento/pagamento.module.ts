/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagamentosService } from './pagamento.service';
import { Pagamento } from './entities/pagamento.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { PagamentosController } from './pagamento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pagamento, Pedido])],
  controllers: [PagamentosController],
  providers: [PagamentosService],
})
export class PagamentoModule {}
