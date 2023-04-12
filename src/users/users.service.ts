import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { findRequest } from '../utils/functions';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

const relations = ['role', 'family'];

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(query) {
    return this.usersRepository.find(findRequest({ relations, query }));
  }

  count(query) {
    return this.usersRepository.count(findRequest({ relations, query }));
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne({ where: { id }, relations });
  }

  create(userDto: UserDto) {
    return this.usersRepository.save(userDto);
  }

  createMany(userDtos: UserDto[]) {
    const batch = [];
    userDtos.forEach((userDto) => {
      batch.push(this.usersRepository.create(userDto));
    });
    return this.usersRepository.save(batch);
  }

  update(id: string, userDto: UserDto) {
    return this.usersRepository.update(id, userDto);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
