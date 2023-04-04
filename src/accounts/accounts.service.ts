import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}

  findAll() {
    return this.accountsRepository.find();
  }

  findOne(id: number): Promise<Account> {
    return this.accountsRepository.findOneBy({ id });
  }

  create(createAccountDto: CreateAccountDto) {
    return this.accountsRepository.save(createAccountDto);
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return this.accountsRepository.update(id, updateAccountDto);
  }

  async remove(id: number): Promise<void> {
    await this.accountsRepository.delete(id);
  }
}
