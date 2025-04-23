/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fruta } from './entities/fruta.entity';
import { FrutasService } from './fruta.service';
import { FrutasController } from './fruta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Fruta])],
  controllers: [FrutasController],
  providers: [FrutasService],
  exports: [TypeOrmModule]
})
export class FrutaModule {}


