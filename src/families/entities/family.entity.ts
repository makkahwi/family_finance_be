import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Account } from '../../accounts/entities/account.entity';

@Entity()
export class Family {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.family)
  @JoinColumn({ name: 'users' })
  users: User[];

  @OneToMany(() => Account, (account) => account.family)
  @JoinColumn({ name: 'accounts' })
  accounts: Account[];
}
