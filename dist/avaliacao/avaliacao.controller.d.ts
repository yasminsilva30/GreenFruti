import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
export declare class AvaliacaoController {
    private readonly avaliacaoService;
    constructor(avaliacaoService: AvaliacaoService);
    create(dto: CreateAvaliacaoDto): Promise<import("./entities/avaliacao.entity").Avaliacao>;
    findAll(): Promise<import("./entities/avaliacao.entity").Avaliacao[]>;
    findOne(id: string): Promise<import("./entities/avaliacao.entity").Avaliacao | null>;
    update(id: string, dto: UpdateAvaliacaoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
