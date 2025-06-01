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
import { PagamentosService } from './pagamento.service';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../user/entities/user.entity';

@Controller('pagamentos')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class PagamentosController {
  constructor(private readonly pagamentosService: PagamentosService) {}

  @Post()
  create(@Body() dto: CreatePagamentoDto) {
    return this.pagamentosService.create(dto);
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  findAll() {
    return this.pagamentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagamentosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePagamentoDto) {
    return this.pagamentosService.update(+id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  remove(@Param('id') id: string) {
    return this.pagamentosService.remove(+id);
  }
}
