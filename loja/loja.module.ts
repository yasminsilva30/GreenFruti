/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LojasService } from './loja.service';
import { LojaController } from './loja.controller';
import { Loja } from './entities/loja.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Loja])],
  providers: [LojasService],
  controllers: [LojaController],
})
export class LojaModule {}
