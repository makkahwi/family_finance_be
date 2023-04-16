import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NotFoundHandler, findRequest } from '../utils/functions';
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

  async findOne(id: string) {
    return NotFoundHandler({
      action: 'find',
      result: await this.usersRepository.findOne({ where: { id }, relations }),
    });
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

  async update(id: string, userDto: UserDto) {
    return NotFoundHandler({
      action: 'update',
      result: await this.usersRepository.update(id, userDto),
    });
  }

  async remove(id: string) {
    return NotFoundHandler({
      action: 'delete',
      result: await this.usersRepository.delete(id),
    });
  }

  async removeMany(ids: string[]) {
    return NotFoundHandler({
      action: 'delete',
      result: await this.usersRepository.delete(ids),
    });
  }
}
