/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/user/entities/user.entity';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('enderecos')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.USER, UserRole.ADMIN)
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecoService.create(createEnderecoDto);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.USER, UserRole.ADMIN)
  findOne(@Param('id') id: string) {
    return this.enderecoService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.USER, UserRole.ADMIN)
  update(
    @Param('id') id: string,
    @Body() updateEnderecoDto: UpdateEnderecoDto,
  ) {
    return this.enderecoService.update(+id, updateEnderecoDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.USER, UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.enderecoService.remove(+id);
  }
}
