/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';

@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  metodo: string;

  @Column('decimal', { precision: 10, scale: 2 })
  valor: number;

  @Column()
  status: string;

  @OneToOne(() => Pedido, (pedido) => pedido.pagamento)
  @JoinColumn()
  pedido: Pedido;
}
