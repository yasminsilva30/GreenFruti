import { DonoLojaService } from './dono-loja.service';
import { CreateDonoLojaDto } from './dto/create-dono-loja.dto';
import { UpdateDonoLojaDto } from './dto/update-dono-loja.dto';
import { DonoLoja } from './entities/dono-loja.entity';
export declare class DonoLojaController {
    private readonly donoLojaService;
    constructor(donoLojaService: DonoLojaService);
    create(createDonoLojaDto: CreateDonoLojaDto): Promise<DonoLoja>;
    findAll(): Promise<DonoLoja[]>;
    findOne(id: string): Promise<DonoLoja>;
    update(id: string, updateDonoLojaDto: UpdateDonoLojaDto): Promise<DonoLoja>;
    remove(id: string): Promise<void>;
}
