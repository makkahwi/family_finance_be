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
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.family)
  @JoinColumn({ name: 'users' })
  users: User[];

  @OneToMany(() => Account, (user) => user.family)
  @JoinColumn({ name: 'accounts' })
  accounts: Account[];
}
