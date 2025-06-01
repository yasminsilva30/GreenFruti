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
import { plainToInstance } from 'class-transformer';
import { DonoLoja } from './entities/dono-loja.entity';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserRole } from 'src/user/entities/user.entity';

@Controller('donos-loja')
export class DonoLojaController {
  constructor(private readonly donoLojaService: DonoLojaService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  async create(@Body() createDonoLojaDto: CreateDonoLojaDto) {
    const dono = await this.donoLojaService.create(createDonoLojaDto);
    return plainToInstance(DonoLoja, dono, { excludeExtraneousValues: true });
  }

  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN)
  async findAll() {
    const donos = await this.donoLojaService.findAll();
    return donos.map((dono) =>
      plainToInstance(DonoLoja, dono, { excludeExtraneousValues: true }),
    );
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  async findOne(@Param('id') id: string) {
    const dono = await this.donoLojaService.findOne(+id);
    return plainToInstance(DonoLoja, dono, { excludeExtraneousValues: true });
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  async update(
    @Param('id') id: string,
    @Body() updateDonoLojaDto: UpdateDonoLojaDto,
  ) {
    const dono = await this.donoLojaService.update(+id, updateDonoLojaDto);
    return plainToInstance(DonoLoja, dono, { excludeExtraneousValues: true });
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.donoLojaService.remove(+id);
  }
}
