import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transfer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  currency: string;

  @Column()
  description: string;
}
