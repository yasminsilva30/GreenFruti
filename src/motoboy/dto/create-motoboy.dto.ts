/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateMotoboyDto {
  @IsString()
  nome: string;

  @IsString()
  telefone: string;
}
