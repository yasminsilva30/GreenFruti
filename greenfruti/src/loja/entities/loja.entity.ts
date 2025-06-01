/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DonoLoja } from 'src/dono-loja/entities/dono-loja.entity'; // Corrigir caminho de importação
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Estoque } from 'src/estoque/entities/estoque.entity';

@Entity()
export class Loja {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  endereco: string;

  @Column('decimal', { precision: 10, scale: 2 })
  latitude: number;

  @Column('decimal', { precision: 10, scale: 2 })
  longitude: number;

  @OneToMany(() => DonoLoja, (donoLoja) => donoLoja.loja)
  donosLoja: DonoLoja[];

  @OneToMany(() => Pedido, (pedido) => pedido.loja)
  pedidos: Pedido[];

  @OneToMany(() => Estoque, (estoque) => estoque.loja)
  estoques: Estoque[];
}
