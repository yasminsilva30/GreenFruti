/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstoquesService } from './estoque.service';
import { EstoquesController } from './estoque.controller';
import { Estoque } from './entities/estoque.entity';
import { Fruta } from 'src/fruta/entities/fruta.entity';
import { Loja } from 'src/loja/entities/loja.entity';
import { FrutaModule } from 'src/fruta/fruta.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Estoque, Fruta, Loja]),
    FrutaModule,
  ],
  controllers: [EstoquesController],
  providers: [EstoquesService],
})
export class EstoquesModule {}
