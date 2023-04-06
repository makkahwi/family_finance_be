import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AccountDto } from './dto/account.dto';
import { Account } from './entities/account.entity';

const relations = ['family', 'transfersFrom', 'transfersTo', 'categories'];

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}

  findAll(where) {
    return this.accountsRepository.find({
      relations,
      where,
    });
  }

  findOne(id: number): Promise<Account> {
    return this.accountsRepository.findOne({ where: { id }, relations });
  }

  create(accountDto: AccountDto) {
    return this.accountsRepository.save(accountDto);
  }

  update(id: number, accountDto: AccountDto) {
    return this.accountsRepository.update(id, accountDto);
  }

  async remove(id: number): Promise<void> {
    await this.accountsRepository.delete(id);
  }
}
