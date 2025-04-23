import { Repository } from 'typeorm';
import { Loja } from './entities/loja.entity';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
export declare class LojasService {
    private lojaRepository;
    constructor(lojaRepository: Repository<Loja>);
    create(createLojaDto: CreateLojaDto): Promise<Loja>;
    findAll(): Promise<Loja[]>;
    findOne(id: number): Promise<Loja | null>;
    update(id: number, updateLojaDto: UpdateLojaDto): Promise<{
        nome: string;
        endereco: string;
        latitude: number;
        longitude: number;
        id: number;
        donosLoja: import("../dono-loja/entities/dono-loja.entity").DonoLoja[];
        pedidos: import("../pedido/entities/pedido.entity").Pedido[];
        estoques: import("../estoque/entities/estoque.entity").Estoque[];
    } & Loja>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
