/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Motoboy } from 'src/motoboy/entities/motoboy.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';

@Entity()
export class Entrega {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.entrega)
  pedido: Pedido;

  @ManyToOne(() => Motoboy, (motoboy) => motoboy.entrega)
  motoboy: Motoboy;

  @ManyToOne(() => Endereco, (endereco) => endereco.entregas, { eager: true })
  @JoinColumn({ name: 'enderecoId' })
  endereco: Endereco;

  @Column()
  status: string;

  @Column({ type: 'datetime' })
  dataEntrega: Date;
}
