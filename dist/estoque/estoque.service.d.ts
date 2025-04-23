import { Repository } from 'typeorm';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { Estoque } from './entities/estoque.entity';
import { Fruta } from 'src/fruta/entities/fruta.entity';
import { Loja } from 'src/loja/entities/loja.entity';
export declare class EstoquesService {
    private estoqueRepo;
    private frutaRepo;
    private lojaRepo;
    constructor(estoqueRepo: Repository<Estoque>, frutaRepo: Repository<Fruta>, lojaRepo: Repository<Loja>);
    create(createEstoqueDto: CreateEstoqueDto): Promise<Estoque>;
    findAll(): Promise<Estoque[]>;
    findOne(id: number): Promise<Estoque>;
    update(id: number, updateEstoqueDto: UpdateEstoqueDto): Promise<{
        quantidade: number;
        frutaId?: number | undefined;
        lojaId?: number | undefined;
        id: number;
        fruta: Fruta;
        loja: Loja;
    } & Estoque>;
    remove(id: number): Promise<Estoque>;
}
