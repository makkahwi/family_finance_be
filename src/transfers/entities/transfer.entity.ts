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
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  amount: number;

  @Column()
  exchangeRate: number;

  @ManyToOne(() => Account, (account) => account.transfersFrom, {
    cascade: true,
  })
  @JoinColumn({ name: 'from' })
  from: Account;

  @ManyToOne(() => Account, (account) => account.transfersTo, { cascade: true })
  @JoinColumn({ name: 'to' })
  to: Account;
}
