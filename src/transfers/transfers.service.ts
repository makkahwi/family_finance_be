import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { findRequest } from '../utils/functions';
import { TransferDto } from './dto/transfer.dto';
import { Transfer } from './entities/transfer.entity';

const relations = ['from', 'to'];

@Injectable()
export class TransfersService {
  constructor(
    @InjectRepository(Transfer)
    private transfersRepository: Repository<Transfer>,
  ) {}

  findAll(query) {
    return this.transfersRepository.find(findRequest({ query, relations }));
  }

  count(query) {
    return this.transfersRepository.count(findRequest({ relations, query }));
  }

  findOne(id: string): Promise<Transfer> {
    return this.transfersRepository.findOne({ where: { id }, relations });
  }

  create(transferDto: TransferDto) {
    return this.transfersRepository.save(transferDto);
  }

  update(id: string, transferDto: TransferDto) {
    return this.transfersRepository.update(id, transferDto);
  }

  async remove(id: string): Promise<void> {
    await this.transfersRepository.delete(id);
  }
}
