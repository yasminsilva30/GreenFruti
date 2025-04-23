import { EntregaService } from './entrega.service';
import { CreateEntregaDto } from './dto/create-entrega.dto';
import { UpdateEntregaDto } from './dto/update-entrega.dto';
export declare class EntregaController {
    private readonly entregaService;
    constructor(entregaService: EntregaService);
    create(dto: CreateEntregaDto): Promise<import("./entities/entrega.entity").Entrega>;
    findAll(): Promise<import("./entities/entrega.entity").Entrega[]>;
    findOne(id: string): Promise<import("./entities/entrega.entity").Entrega>;
    update(id: string, dto: UpdateEntregaDto): Promise<import("./entities/entrega.entity").Entrega>;
    remove(id: string): Promise<void>;
}
