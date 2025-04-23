/* eslint-disable prettier/prettier */
import { IsInt, IsPositive, IsNotEmpty } from 'class-validator';

export class CreateEstoqueDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  quantidade: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  frutaId: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  lojaId: number;
}
