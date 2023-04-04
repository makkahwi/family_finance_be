import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column()
  note: string;

  @Column()
  timestamp: string;
}
