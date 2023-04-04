import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

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

  @ManyToOne(() => Category, (account) => account.records, { cascade: true })
  @JoinColumn({ name: 'category' })
  category: Category;
}
