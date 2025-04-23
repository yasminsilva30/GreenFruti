/* eslint-disable prettier/prettier */
import { IsNumber, IsArray } from 'class-validator';

export class CreatePedidoDto {
  @IsNumber()
  total: number;

  @IsNumber()
  clienteId: number;

  @IsNumber()
  pagamentoId: number;

  @IsNumber()
  entregaId: number;

  @IsArray()
  carrinhos: number[];
}
