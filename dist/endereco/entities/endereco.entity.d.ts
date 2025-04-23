import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Entrega } from 'src/entrega/entities/entrega.entity';
export declare class Endereco {
    id: number;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cliente: Cliente;
    entregas: Entrega[];
}
