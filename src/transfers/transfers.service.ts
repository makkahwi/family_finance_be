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

  findAll() {
    return this.transfersRepository.find({ relations });
  }

  findOne(id: number): Promise<Transfer> {
    return this.transfersRepository.findOne({ where: { id }, relations });
  }

  create(TransferDto: TransferDto) {
    return this.transfersRepository.save(TransferDto);
  }

  update(id: number, TransferDto: TransferDto) {
    return this.transfersRepository.update(id, TransferDto);
  }

  async remove(id: number): Promise<void> {
    await this.transfersRepository.delete(id);
  }
}
