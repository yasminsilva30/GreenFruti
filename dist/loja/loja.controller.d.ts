import { LojasService } from './loja.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
export declare class LojaController {
    private readonly lojasService;
    constructor(lojasService: LojasService);
    create(createLojaDto: CreateLojaDto): Promise<import("./entities/loja.entity").Loja>;
    findAll(): Promise<import("./entities/loja.entity").Loja[]>;
    findOne(id: string): Promise<import("./entities/loja.entity").Loja | null>;
    update(id: string, updateLojaDto: UpdateLojaDto): Promise<{
        nome: string;
        endereco: string;
        latitude: number;
        longitude: number;
        id: number;
        donosLoja: import("../dono-loja/entities/dono-loja.entity").DonoLoja[];
        pedidos: import("../pedido/entities/pedido.entity").Pedido[];
        estoques: import("../estoque/entities/estoque.entity").Estoque[];
    } & import("./entities/loja.entity").Loja>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
