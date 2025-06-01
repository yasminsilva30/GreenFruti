import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nomeUsuario: string;

  @IsString()
  nome: string;

  @IsString()
  senha: string;

  @IsEmail()
  email: string;
}
