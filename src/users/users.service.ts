import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { rebuildParams } from '../utils/functions';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

const relations = ['role', 'family'];

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(where) {
    return this.usersRepository.find({
      relations,
      where: rebuildParams(where),
    });
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id }, relations });
  }

  create(userDto: UserDto) {
    return this.usersRepository.save(userDto);
  }

  update(id: number, userDto: UserDto) {
    return this.usersRepository.update(id, userDto);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
