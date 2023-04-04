import { DataSource } from 'typeorm';
import { Record } from './entities/record.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { Repository } from 'typeorm';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private recordsRepository: Repository<Record>,
  ) {}

  create(createRecordDto: CreateRecordDto) {
    return this.recordsRepository.save(createRecordDto);
  }

  findAll() {
    return this.recordsRepository.find();
  }

  findOne(id: number): Promise<Record> {
    return this.recordsRepository.findOneBy({ id });
  }

  update(id: number, updateRecordDto: UpdateRecordDto) {
    return this.recordsRepository.update(id, updateRecordDto);
  }

  async remove(id: number): Promise<void> {
    await this.recordsRepository.delete(id);
  }
}
