/* eslint-disable prettier/prettier */
import { IsInt, IsOptional, IsString, Min, Max } from 'class-validator';

export class CreateAvaliacaoDto {
  @IsInt()
  clienteId: number;

  @IsOptional()
  @IsInt()
  pedidoId?: number;

  @IsOptional()
  @IsInt()
  frutaId?: number;

  @IsInt()
  @Min(1)
  @Max(5)
  nota: number;

  @IsOptional()
  @IsString()
  comentario?: string;
}
