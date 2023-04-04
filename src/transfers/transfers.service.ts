import { DataSource } from 'typeorm';
import { Transfer } from './entities/transfer.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TransfersService {
  constructor(
    @InjectRepository(Transfer)
    private transfersRepository: Repository<Transfer>,
  ) {}

  create(createTransferDto: CreateTransferDto) {
    return this.transfersRepository.save(createTransferDto);
  }

  findAll() {
    return this.transfersRepository.find();
  }

  findOne(id: number): Promise<Transfer> {
    return this.transfersRepository.findOneBy({ id });
  }

  update(id: number, updateTransferDto: UpdateTransferDto) {
    return this.transfersRepository.update(id, updateTransferDto);
  }

  async remove(id: number): Promise<void> {
    await this.transfersRepository.delete(id);
  }
}
