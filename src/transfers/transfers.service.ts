import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';
import { Transfer } from './entities/transfer.entity';

@Injectable()
export class TransfersService {
  constructor(
    @InjectRepository(Transfer)
    private transfersRepository: Repository<Transfer>,
  ) {}

  findAll() {
    return this.transfersRepository.find({ relations: ['account'] });
  }

  findOne(id: number): Promise<Transfer> {
    return this.transfersRepository.findOneBy({ id });
  }

  create(createTransferDto: CreateTransferDto) {
    return this.transfersRepository.save(createTransferDto);
  }

  update(id: number, updateTransferDto: UpdateTransferDto) {
    return this.transfersRepository.update(id, updateTransferDto);
  }

  async remove(id: number): Promise<void> {
    await this.transfersRepository.delete(id);
  }
}
