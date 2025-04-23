import { PedidosService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
export declare class PedidosController {
    private readonly pedidosService;
    constructor(pedidosService: PedidosService);
    create(dto: CreatePedidoDto): Promise<import("./entities/pedido.entity").Pedido>;
    findAll(): Promise<import("./entities/pedido.entity").Pedido[]>;
    findOne(id: string): Promise<import("./entities/pedido.entity").Pedido>;
    update(id: string, dto: UpdatePedidoDto): Promise<import("./entities/pedido.entity").Pedido>;
    remove(id: string): Promise<void>;
}
