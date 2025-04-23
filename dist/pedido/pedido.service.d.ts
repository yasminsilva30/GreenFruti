import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Pagamento } from 'src/pagamento/entities/pagamento.entity';
import { Entrega } from 'src/entrega/entities/entrega.entity';
import { Carrinho } from 'src/carrinho/entities/carrinho.entity';
export declare class PedidosService {
    private pedidoRepo;
    private clienteRepo;
    private pagamentoRepo;
    private entregaRepo;
    private carrinhoRepo;
    constructor(pedidoRepo: Repository<Pedido>, clienteRepo: Repository<Cliente>, pagamentoRepo: Repository<Pagamento>, entregaRepo: Repository<Entrega>, carrinhoRepo: Repository<Carrinho>);
    create(dto: CreatePedidoDto): Promise<Pedido>;
    findAll(): Promise<Pedido[]>;
    findOne(id: number): Promise<Pedido>;
    update(id: number, dto: UpdatePedidoDto): Promise<Pedido>;
    remove(id: number): Promise<void>;
}
