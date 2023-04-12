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

  createMany(accountDtos: AccountDto[]) {
    const batch = [];
    accountDtos.forEach((accountDto) => {
      batch.push(this.accountsRepository.create(accountDto));
    });
    return this.accountsRepository.save(batch);
  }

  update(id: string, accountDto: AccountDto) {
    return this.accountsRepository.update(id, accountDto);
  }

  remove(id: string) {
    return this.accountsRepository.delete(id);
  }
}
