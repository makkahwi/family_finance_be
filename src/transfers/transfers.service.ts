import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TransferDto } from './dto/transfer.dto';
import { Transfer } from './entities/transfer.entity';

const relations = ['from', 'to'];

@Injectable()
export class TransfersService {
  constructor(
    @InjectRepository(Transfer)
    private transfersRepository: Repository<Transfer>,
  ) {}

  findAll(where) {
    return this.transfersRepository.find({ relations, where });
  }

  findOne(id: number): Promise<Transfer> {
    return this.transfersRepository.findOne({ where: { id }, relations });
  }

  create(transferDto: TransferDto) {
    return this.transfersRepository.save(transferDto);
  }

  update(id: number, transferDto: TransferDto) {
    return this.transfersRepository.update(id, transferDto);
  }

  async remove(id: number): Promise<void> {
    await this.transfersRepository.delete(id);
  }
}
