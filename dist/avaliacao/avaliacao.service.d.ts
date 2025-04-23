import { Repository } from 'typeorm';
import { Avaliacao } from './entities/avaliacao.entity';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Fruta } from 'src/fruta/entities/fruta.entity';
export declare class AvaliacaoService {
    private avaliacaoRepository;
    private clienteRepository;
    private pedidoRepository;
    private frutaRepository;
    constructor(avaliacaoRepository: Repository<Avaliacao>, clienteRepository: Repository<Cliente>, pedidoRepository: Repository<Pedido>, frutaRepository: Repository<Fruta>);
    create(dto: CreateAvaliacaoDto): Promise<Avaliacao>;
    findAll(): Promise<Avaliacao[]>;
    findOne(id: number): Promise<Avaliacao | null>;
    update(id: number, dto: UpdateAvaliacaoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
