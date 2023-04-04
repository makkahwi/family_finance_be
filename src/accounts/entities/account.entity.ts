import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Family } from '../../families/entities/family.entity';
import { Transfer } from '../../transfers/entities/transfer.entity';
import { Category } from '../../categories/entities/category.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Family, (family) => family.accounts, { cascade: true })
  @JoinColumn({ name: 'family' })
  family: Family;

  @OneToMany(() => Transfer, (transfer) => transfer.account)
  @JoinColumn({ name: 'transfers' })
  transfers: Transfer[];

  @OneToMany(() => Category, (category) => category.account)
  @JoinColumn({ name: 'categories' })
  categories: Category[];

  @Column()
  currency: string;

  @Column()
  description: string;
}
