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
import { EntregaService } from './entrega.service';
import { CreateEntregaDto } from './dto/create-entrega.dto';
import { UpdateEntregaDto } from './dto/update-entrega.dto';

import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/user/entities/user.entity';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('entregas')
export class EntregaController {
  constructor(private readonly entregaService: EntregaService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.USER, UserRole.MANAGER, UserRole.ADMIN)
  create(@Body() createEntregaDto: CreateEntregaDto) {
    return this.entregaService.create(createEntregaDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  findAll() {
    return this.entregaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.USER, UserRole.MANAGER, UserRole.ADMIN)
  findOne(@Param('id') id: string) {
    return this.entregaService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  update(
    @Param('id') id: string,
    @Body() updateEntregaDto: UpdateEntregaDto,
  ) {
    return this.entregaService.update(+id, updateEntregaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.entregaService.remove(+id);
  }
}
