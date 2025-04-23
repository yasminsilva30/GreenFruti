import { EstoquesService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
export declare class EstoquesController {
    private readonly estoquesService;
    constructor(estoquesService: EstoquesService);
    create(createEstoqueDto: CreateEstoqueDto): Promise<import("./entities/estoque.entity").Estoque>;
    findAll(): Promise<import("./entities/estoque.entity").Estoque[]>;
    findOne(id: string): Promise<import("./entities/estoque.entity").Estoque>;
    update(id: string, updateEstoqueDto: UpdateEstoqueDto): Promise<{
        quantidade: number;
        frutaId?: number | undefined;
        lojaId?: number | undefined;
        id: number;
        fruta: import("../fruta/entities/fruta.entity").Fruta;
        loja: import("../loja/entities/loja.entity").Loja;
    } & import("./entities/estoque.entity").Estoque>;
    remove(id: string): Promise<import("./entities/estoque.entity").Estoque>;
}
