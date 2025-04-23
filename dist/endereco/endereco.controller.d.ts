import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
export declare class EnderecoController {
    private readonly enderecoService;
    constructor(enderecoService: EnderecoService);
    create(createEnderecoDto: CreateEnderecoDto): Promise<import("./entities/endereco.entity").Endereco>;
    findAll(): Promise<import("./entities/endereco.entity").Endereco[]>;
    findOne(id: string): Promise<import("./entities/endereco.entity").Endereco | {
        message: string;
    }>;
    update(id: string, updateEnderecoDto: UpdateEnderecoDto): Promise<import("./entities/endereco.entity").Endereco>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
