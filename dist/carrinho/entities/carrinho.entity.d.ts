import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Fruta } from 'src/fruta/entities/fruta.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
export declare class Carrinho {
    id: number;
    cliente: Cliente;
    fruta: Fruta;
    quantidade: number;
    precoTotal: number;
    pedido: Pedido;
}
