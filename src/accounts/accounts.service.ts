import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { findRequest } from '../utils/functions';
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

  findOne(id: string): Promise<Account> {
    return this.accountsRepository.findOne({ where: { id }, relations });
  }

  create(accountDto: AccountDto) {
    return this.accountsRepository.save(accountDto);
  }

  update(id: string, accountDto: AccountDto) {
    return this.accountsRepository.update(id, accountDto);
  }

  async remove(id: string): Promise<void> {
    await this.accountsRepository.delete(id);
  }
}
