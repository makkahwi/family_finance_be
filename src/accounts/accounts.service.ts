import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NotFoundHandler, findRequest } from '../utils/functions';
import { AccountDto } from './dto/account.dto';
import { Account } from './entities/account.entity';

const relations = ['family', 'transfersFrom', 'transfersTo', 'categories'];

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}

  findAll(query) {
    return this.accountsRepository.find(findRequest({ relations, query }));
  }

  count(query) {
    return this.accountsRepository.count(findRequest({ relations, query }));
  }

  async findOne(id: string) {
    return NotFoundHandler({
      action: 'find',
      result: await this.accountsRepository.findOne({
        where: { id },
        relations,
      }),
    });
  }

  create(accountDto: AccountDto) {
    return this.accountsRepository.save(accountDto);
  }

  createMany(accountDtos: AccountDto[]) {
    const batch = [];
    accountDtos.forEach((accountDto) => {
      batch.push(this.accountsRepository.create(accountDto));
    });
    return this.accountsRepository.save(batch);
  }

  async update(id: string, accountDto: AccountDto) {
    return NotFoundHandler({
      action: 'update',
      result: await this.accountsRepository.update(id, accountDto),
    });
  }

  async remove(id: string) {
    return NotFoundHandler({
      action: 'delete',
      result: await this.accountsRepository.delete(id),
    });
  }

  async removeMany(ids: string[]) {
    return NotFoundHandler({
      action: 'delete',
      result: await this.accountsRepository.delete(ids),
    });
  }
}
