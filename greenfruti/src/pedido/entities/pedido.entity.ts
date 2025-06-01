/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Pagamento } from 'src/pagamento/entities/pagamento.entity';
import { Entrega } from 'src/entrega/entities/entrega.entity';
import { Carrinho } from 'src/carrinho/entities/carrinho.entity';
import { Avaliacao } from 'src/avaliacao/entities/avaliacao.entity';
import { Produto } from 'src/produto/entities/produto.entity';
import { Loja } from 'src/loja/entities/loja.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos)
  cliente: Cliente;

  @OneToOne(() => Pagamento, (pagamento) => pagamento.pedido)
  @JoinColumn()
  pagamento: Pagamento;

  @OneToOne(() => Entrega, (entrega) => entrega.pedido)
  @JoinColumn()
  entrega: Entrega;

  @OneToMany(() => Carrinho, (carrinho) => carrinho.pedido)
  carrinhos: Carrinho[];

  @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.pedido)
  avaliacoes: Avaliacao[];

  @ManyToOne(() => Produto, (produto) => produto.pedidos)
  produto: Produto;

  @ManyToOne(() => Loja, (loja) => loja.pedidos)
  loja: Loja;
}
