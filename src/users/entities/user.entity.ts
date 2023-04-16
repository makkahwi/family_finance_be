import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { Family } from '../../families/entities/family.entity';
import { Record } from '../../records/entities/record.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Role, (role) => role.users, { cascade: true })
  @JoinColumn({ name: 'role' })
  role: Role;

  @ManyToOne(() => Family, (family) => family.users, { cascade: true })
  @JoinColumn({ name: 'family' })
  family: Family;

  @OneToMany(() => Record, (record) => record.user)
  @JoinColumn({ name: 'account' })
  records: Record[];

  @Column()
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
}
