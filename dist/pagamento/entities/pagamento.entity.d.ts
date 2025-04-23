import { Pedido } from 'src/pedido/entities/pedido.entity';
export declare class Pagamento {
    id: number;
    metodo: string;
    valor: number;
    status: string;
    pedido: Pedido;
}
