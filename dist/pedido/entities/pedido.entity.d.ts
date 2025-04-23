import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Pagamento } from 'src/pagamento/entities/pagamento.entity';
import { Entrega } from 'src/entrega/entities/entrega.entity';
import { Carrinho } from 'src/carrinho/entities/carrinho.entity';
import { Avaliacao } from 'src/avaliacao/entities/avaliacao.entity';
export declare class Pedido {
    id: number;
    total: number;
    cliente: Cliente;
    pagamento: Pagamento;
    entrega: Entrega;
    carrinhos: Carrinho[];
    avaliacoes: Avaliacao[];
    fruta: any;
    loja: any;
}
