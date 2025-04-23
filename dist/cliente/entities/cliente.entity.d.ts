import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Carrinho } from 'src/carrinho/entities/carrinho.entity';
import { Avaliacao } from 'src/avaliacao/entities/avaliacao.entity';
export declare class Cliente {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    enderecos: Endereco[];
    pedidos: Pedido[];
    carrinhos: Carrinho[];
    avaliacoes: Avaliacao[];
}
