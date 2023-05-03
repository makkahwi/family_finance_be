import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Record {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: number;

  @Column()
  note: string;

  @Column()
  timestamp: string;

  @ManyToOne(() => Category, (account) => account.records, { cascade: true })
  @JoinColumn({ name: 'category' })
  category: Category;

  @ManyToOne(() => User, (user) => user.records, { cascade: true })
  @JoinColumn({ name: 'category' })
  user: User;
}
