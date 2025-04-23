import { CarrinhoService } from './carrinho.service';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';
export declare class CarrinhoController {
    private readonly carrinhoService;
    constructor(carrinhoService: CarrinhoService);
    create(dto: CreateCarrinhoDto): Promise<import("./entities/carrinho.entity").Carrinho>;
    findAll(): Promise<import("./entities/carrinho.entity").Carrinho[]>;
    findOne(id: string): Promise<import("./entities/carrinho.entity").Carrinho>;
    update(id: string, dto: UpdateCarrinhoDto): Promise<{
        clienteId?: number | undefined;
        frutaId?: number | undefined;
        quantidade: number;
        id: number;
        cliente: import("../cliente/entities/cliente.entity").Cliente;
        fruta: import("../fruta/entities/fruta.entity").Fruta;
        precoTotal: number;
        pedido: import("../pedido/entities/pedido.entity").Pedido;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
