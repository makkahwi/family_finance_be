import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Family } from '../../families/entities/family.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Family, (family) => family.accounts, { cascade: true })
  @JoinColumn({ name: 'family' })
  family: Family;

  @Column()
  currency: string;

  @Column()
  description: string;
}
