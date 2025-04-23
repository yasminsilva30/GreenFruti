/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Fruta } from 'src/fruta/entities/fruta.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';

@Entity()
export class Carrinho {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.carrinhos, { eager: true })
  @JoinColumn()
  cliente: Cliente;

  @ManyToOne(() => Fruta, (fruta) => fruta.carrinhos, { eager: true })
  @JoinColumn()
  fruta: Fruta;

  @Column('int')
  quantidade: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precoTotal: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.carrinhos, { nullable: true })
  @JoinColumn()
  pedido: Pedido;
}
