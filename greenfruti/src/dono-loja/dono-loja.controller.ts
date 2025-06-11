/* eslint-disable prettier/prettier */
import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Put, 
  Param, 
  Delete,
  UseGuards
} from '@nestjs/common';
import { DonoLojaService } from './dono-loja.service';
import { CreateDonoLojaDto } from './dto/create-dono-loja.dto';
import { UpdateDonoLojaDto } from './dto/update-dono-loja.dto';

import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/user/entities/user.entity';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('donos-loja')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class DonoLojaController {
  constructor(private readonly donoLojaService: DonoLojaService) {}

  @Post()
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  create(@Body() dto: CreateDonoLojaDto) {
    return this.donoLojaService.create(dto);
  }

  @Get()
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  findAll() {
    return this.donoLojaService.findAll();
  }

  @Get(':id')
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  findOne(@Param('id') id: string) {
    return this.donoLojaService.findOne(+id);
  }

  @Put(':id')
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  update(@Param('id') id: string, @Body() dto: UpdateDonoLojaDto) {
    return this.donoLojaService.update(+id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.donoLojaService.remove(+id);
  }
}
