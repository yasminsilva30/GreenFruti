import { Fruta } from 'src/fruta/entities/fruta.entity';
import { Loja } from 'src/loja/entities/loja.entity';
export declare class Estoque {
    id: number;
    quantidade: number;
    fruta: Fruta;
    loja: Loja;
}
