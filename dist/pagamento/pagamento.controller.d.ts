import { PagamentosService } from './pagamento.service';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';
export declare class PagamentosController {
    private readonly pagamentosService;
    constructor(pagamentosService: PagamentosService);
    create(dto: CreatePagamentoDto): Promise<import("./entities/pagamento.entity").Pagamento>;
    findAll(): Promise<import("./entities/pagamento.entity").Pagamento[]>;
    findOne(id: string): Promise<import("./entities/pagamento.entity").Pagamento>;
    update(id: string, dto: UpdatePagamentoDto): Promise<import("./entities/pagamento.entity").Pagamento>;
    remove(id: string): Promise<void>;
}
