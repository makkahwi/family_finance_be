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

  findAll() {
    return this.accountsRepository.find({
      relations,
    });
  }

  findOne(id: number): Promise<Account> {
    return this.accountsRepository.findOne({ where: { id }, relations });
  }

  create(createAccountDto: AccountDto) {
    return this.accountsRepository.save(createAccountDto);
  }

  update(id: number, updateAccountDto: AccountDto) {
    return this.accountsRepository.update(id, updateAccountDto);
  }

  async remove(id: number): Promise<void> {
    await this.accountsRepository.delete(id);
  }
}
