/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from 'class-validator';

export class CreateFrutaDto {
  @IsString()
  nome: string;

  @IsNumber()
  preco: number;

  @IsNumber()
  quantidadeEstoque: number;
}
