import { Carrinho } from 'src/carrinho/entities/carrinho.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Avaliacao } from 'src/avaliacao/entities/avaliacao.entity';
import { Estoque } from 'src/estoque/entities/estoque.entity';
export declare class Fruta {
    id: number;
    nome: string;
    preco: number;
    quantidadeEstoque: number;
    carrinhos: Carrinho[];
    pedidos: Pedido[];
    avaliacoes: Avaliacao[];
    estoques: Estoque[];
}
