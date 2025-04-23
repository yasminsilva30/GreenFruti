/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Fruta } from 'src/fruta/entities/fruta.entity';
import { Loja } from 'src/loja/entities/loja.entity';

@Entity()
export class Estoque {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  quantidade: number;

  @ManyToOne(() => Fruta, (fruta) => fruta.estoques)
  fruta: Fruta;


  @ManyToOne(() => Loja, (loja) => loja.estoques)
  loja: Loja;
}
