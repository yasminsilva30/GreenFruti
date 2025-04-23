import { Repository } from 'typeorm';
import { Endereco } from './entities/endereco.entity';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Cliente } from 'src/cliente/entities/cliente.entity';
export declare class EnderecoService {
    private enderecoRepository;
    private clienteRepository;
    constructor(enderecoRepository: Repository<Endereco>, clienteRepository: Repository<Cliente>);
    create(createEnderecoDto: CreateEnderecoDto): Promise<Endereco>;
    findAll(): Promise<Endereco[]>;
    findOne(id: number): Promise<Endereco | null>;
    update(id: number, updateEnderecoDto: UpdateEnderecoDto): Promise<Endereco>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
