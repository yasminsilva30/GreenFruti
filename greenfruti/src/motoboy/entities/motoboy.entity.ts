/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Entrega } from 'src/entrega/entities/entrega.entity';

@Entity()
export class Motoboy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @OneToMany(() => Entrega, (entrega) => entrega.motoboy)
  entregas: Entrega[];
  entrega: any;
}
