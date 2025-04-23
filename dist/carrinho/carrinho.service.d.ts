import { Repository } from 'typeorm';
import { Carrinho } from './entities/carrinho.entity';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Fruta } from 'src/fruta/entities/fruta.entity';
export declare class CarrinhoService {
    private carrinhoRepository;
    private clienteRepository;
    private frutaRepository;
    constructor(carrinhoRepository: Repository<Carrinho>, clienteRepository: Repository<Cliente>, frutaRepository: Repository<Fruta>);
    create(dto: CreateCarrinhoDto): Promise<Carrinho>;
    findAll(): Promise<Carrinho[]>;
    findOne(id: number): Promise<Carrinho>;
    update(id: number, dto: UpdateCarrinhoDto): Promise<{
        clienteId?: number | undefined;
        frutaId?: number | undefined;
        quantidade: number;
        id: number;
        cliente: Cliente;
        fruta: Fruta;
        precoTotal: number;
        pedido: import("../pedido/entities/pedido.entity").Pedido;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
