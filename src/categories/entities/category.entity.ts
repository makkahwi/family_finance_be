import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Account } from '../../accounts/entities/account.entity';
import { Record } from '../../records/entities/record.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Account, (account) => account.categories, { cascade: true })
  @JoinColumn({ name: 'account' })
  account: Account;

  @OneToMany(() => Record, (record) => record.category)
  @JoinColumn({ name: 'records' })
  records: Record[];

  @Column()
  type: string;
}
