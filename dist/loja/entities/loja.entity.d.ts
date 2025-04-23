import { DonoLoja } from 'src/dono-loja/entities/dono-loja.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Estoque } from 'src/estoque/entities/estoque.entity';
export declare class Loja {
    id: number;
    nome: string;
    endereco: string;
    latitude: number;
    longitude: number;
    donosLoja: DonoLoja[];
    pedidos: Pedido[];
    estoques: Estoque[];
}
