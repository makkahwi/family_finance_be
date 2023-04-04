import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { Family } from '../../families/entities/family.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Role, (role) => role.users, { cascade: true })
  @JoinColumn({ name: 'role' })
  role: Role;

  @ManyToOne(() => Family, (family) => family.users, { cascade: true })
  @JoinColumn({ name: 'family' })
  family: Family;

  @Column()
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
}
