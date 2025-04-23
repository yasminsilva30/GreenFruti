import { Repository } from 'typeorm';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';
import { Pagamento } from './entities/pagamento.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
export declare class PagamentosService {
    private pagamentoRepo;
    private pedidoRepo;
    constructor(pagamentoRepo: Repository<Pagamento>, pedidoRepo: Repository<Pedido>);
    create(dto: CreatePagamentoDto): Promise<Pagamento>;
    findAll(): Promise<Pagamento[]>;
    findOne(id: number): Promise<Pagamento>;
    update(id: number, dto: UpdatePagamentoDto): Promise<Pagamento>;
    remove(id: number): Promise<void>;
}
