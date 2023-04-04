import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
