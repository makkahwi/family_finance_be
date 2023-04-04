import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Account } from '../../accounts/entities/account.entity';

@Entity()
export class Transfer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  exchangeRate: number;

  @ManyToOne(() => Account, (account) => account.transfers, { cascade: true })
  @JoinColumn({ name: 'account' })
  account: Account;
}
