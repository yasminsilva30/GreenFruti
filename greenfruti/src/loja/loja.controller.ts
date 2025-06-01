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
import { LojasService } from './loja.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserRole } from 'src/user/entities/user.entity';

@Controller('lojas')
export class LojaController {
  constructor(private readonly lojasService: LojasService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  create(@Body() createLojaDto: CreateLojaDto) {
    return this.lojasService.create(createLojaDto);
  }

  @Get()
  findAll() {
    return this.lojasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lojasService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  update(@Param('id') id: string, @Body() updateLojaDto: UpdateLojaDto) {
    return this.lojasService.update(+id, updateLojaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.lojasService.remove(+id);
  }
}
