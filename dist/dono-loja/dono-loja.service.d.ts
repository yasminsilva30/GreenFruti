import { Repository } from 'typeorm';
import { CreateDonoLojaDto } from './dto/create-dono-loja.dto';
import { UpdateDonoLojaDto } from './dto/update-dono-loja.dto';
import { DonoLoja } from './entities/dono-loja.entity';
export declare class DonoLojaService {
    private donoLojaRepo;
    constructor(donoLojaRepo: Repository<DonoLoja>);
    create(createDonoLojaDto: CreateDonoLojaDto): Promise<DonoLoja>;
    findAll(): Promise<DonoLoja[]>;
    findOne(id: number): Promise<DonoLoja | null>;
    update(id: number, updateDonoLojaDto: UpdateDonoLojaDto): Promise<DonoLoja | null>;
    remove(id: number): Promise<void>;
}
