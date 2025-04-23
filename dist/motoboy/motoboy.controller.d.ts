import { MotoboysService } from './motoboy.service';
import { CreateMotoboyDto } from './dto/create-motoboy.dto';
import { UpdateMotoboyDto } from './dto/update-motoboy.dto';
export declare class MotoboysController {
    private readonly motoboysService;
    constructor(motoboysService: MotoboysService);
    create(dto: CreateMotoboyDto): Promise<import("./entities/motoboy.entity").Motoboy>;
    findAll(): Promise<import("./entities/motoboy.entity").Motoboy[]>;
    findOne(id: string): Promise<import("./entities/motoboy.entity").Motoboy | null>;
    update(id: string, dto: UpdateMotoboyDto): Promise<import("./entities/motoboy.entity").Motoboy>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
