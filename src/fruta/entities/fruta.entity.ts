/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Carrinho } from 'src/carrinho/entities/carrinho.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Avaliacao } from 'src/avaliacao/entities/avaliacao.entity';
import { Estoque } from 'src/estoque/entities/estoque.entity';

@Entity()
export class Fruta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @Column()
  quantidadeEstoque: number;

  @OneToMany(() => Carrinho, (carrinho) => carrinho.fruta)
  carrinhos: Carrinho[];

  @OneToMany(() => Pedido, (pedido) => pedido.fruta)
  pedidos: Pedido[];

  @OneToMany(() => Avaliacao, (a) => a.cliente)
  avaliacoes: Avaliacao[];

  @OneToMany(() => Estoque, (estoque) => estoque.fruta)
  estoques: Estoque[];

}
