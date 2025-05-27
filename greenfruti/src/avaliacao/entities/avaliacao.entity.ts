/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Produto } from 'src/produto/entities/produto.entity';

@Entity()
export class Avaliacao {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.avaliacoes, { eager: true })
  cliente: Cliente;

  @ManyToOne(() => Pedido, (pedido) => pedido.avaliacoes)
  pedido: Pedido;

  @ManyToOne(() => Produto, (produto) => produto.avaliacoes)
  produto: Produto;

  @Column()
  nota: number;

  @Column()
  comentario: string;
}
