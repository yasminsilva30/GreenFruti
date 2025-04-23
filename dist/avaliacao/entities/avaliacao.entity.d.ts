import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Fruta } from 'src/fruta/entities/fruta.entity';
export declare class Avaliacao {
    id: number;
    cliente: Cliente;
    pedido: Pedido;
    fruta: Fruta;
    nota: number;
    comentario: string;
}
