import { Repository } from 'typeorm';
import { Entrega } from './entities/entrega.entity';
import { CreateEntregaDto } from './dto/create-entrega.dto';
import { UpdateEntregaDto } from './dto/update-entrega.dto';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Motoboy } from 'src/motoboy/entities/motoboy.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
export declare class EntregaService {
    private entregaRepository;
    private pedidoRepository;
    private motoboyRepository;
    private enderecoRepository;
    constructor(entregaRepository: Repository<Entrega>, pedidoRepository: Repository<Pedido>, motoboyRepository: Repository<Motoboy>, enderecoRepository: Repository<Endereco>);
    create(dto: CreateEntregaDto): Promise<Entrega>;
    update(id: number, dto: UpdateEntregaDto): Promise<Entrega>;
    findAll(): Promise<Entrega[]>;
    findOne(id: number): Promise<Entrega>;
    remove(id: number): Promise<void>;
}
