import { Repository } from 'typeorm';
import { CreateFrutaDto } from './dto/create-fruta.dto';
import { UpdateFrutaDto } from './dto/update-fruta.dto';
import { Fruta } from './entities/fruta.entity';
export declare class FrutasService {
    private frutaRepo;
    constructor(frutaRepo: Repository<Fruta>);
    create(createFrutaDto: CreateFrutaDto): Promise<Fruta>;
    findAll(): Promise<Fruta[]>;
    findOne(id: number): Promise<Fruta | null>;
    update(id: number, updateFrutaDto: UpdateFrutaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
