import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { Record } from './entities/record.entity';

const relations = ['category'];

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private recordsRepository: Repository<Record>,
  ) {}

  findAll() {
    return this.recordsRepository.find({ relations });
  }

  findOne(id: number): Promise<Record> {
    return this.recordsRepository.findOne({ where: { id }, relations });
  }

  create(createRecordDto: CreateRecordDto) {
    return this.recordsRepository.save(createRecordDto);
  }

  update(id: number, updateRecordDto: UpdateRecordDto) {
    return this.recordsRepository.update(id, updateRecordDto);
  }

  async remove(id: number): Promise<void> {
    await this.recordsRepository.delete(id);
  }
}
