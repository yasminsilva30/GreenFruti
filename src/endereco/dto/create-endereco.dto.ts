/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateEnderecoDto {
  @IsString()
  rua: string;

  @IsString()
  numero: string;

  @IsString()
  bairro: string;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;

  clienteId: number;
}
