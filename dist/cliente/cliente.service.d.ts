import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClientesService {
    private clienteRepository;
    constructor(clienteRepository: Repository<Cliente>);
    create(dto: CreateClienteDto): Promise<Cliente>;
    findAll(): Promise<Cliente[]>;
    findOne(id: number): Promise<Cliente>;
    update(id: number, dto: UpdateClienteDto): Promise<Cliente>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
