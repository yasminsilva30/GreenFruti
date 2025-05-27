/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from 'class-validator';

export class CreatePagamentoDto {
  @IsString()
  metodo: string;

  @IsNumber()
  valor: number;

  @IsString()
  formaPagamento: string;

  @IsString()
  status: string;

  @IsNumber()
  pedidoId: number;

  @IsNumber()
  valorPago: number;
}
