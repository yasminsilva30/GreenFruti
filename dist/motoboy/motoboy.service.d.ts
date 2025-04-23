import { Repository } from 'typeorm';
import { CreateMotoboyDto } from './dto/create-motoboy.dto';
import { UpdateMotoboyDto } from './dto/update-motoboy.dto';
import { Motoboy } from './entities/motoboy.entity';
export declare class MotoboysService {
    private motoboyRepository;
    constructor(motoboyRepository: Repository<Motoboy>);
    create(dto: CreateMotoboyDto): Promise<Motoboy>;
    findAll(): Promise<Motoboy[]>;
    findOne(id: number): Promise<Motoboy | null>;
    update(id: number, dto: UpdateMotoboyDto): Promise<Motoboy>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
