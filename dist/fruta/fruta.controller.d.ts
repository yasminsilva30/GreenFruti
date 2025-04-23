import { FrutasService } from './fruta.service';
import { CreateFrutaDto } from './dto/create-fruta.dto';
import { UpdateFrutaDto } from './dto/update-fruta.dto';
export declare class FrutasController {
    private readonly frutasService;
    constructor(frutasService: FrutasService);
    create(createFrutaDto: CreateFrutaDto): Promise<import("./entities/fruta.entity").Fruta>;
    findAll(): Promise<import("./entities/fruta.entity").Fruta[]>;
    findOne(id: string): Promise<import("./entities/fruta.entity").Fruta | null>;
    update(id: string, updateFrutaDto: UpdateFrutaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
