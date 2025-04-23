import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Motoboy } from 'src/motoboy/entities/motoboy.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
export declare class Entrega {
    id: number;
    pedido: Pedido;
    motoboy: Motoboy;
    endereco: Endereco;
    status: string;
    dataEntrega: Date;
}
