import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { findRequest } from '../utils/functions';
import { RecordDto } from './dto/record.dto';
import { Record } from './entities/record.entity';

const relations = ['category'];

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private recordsRepository: Repository<Record>,
  ) {}

  findAll(query) {
    return this.recordsRepository.find(findRequest({ relations, query }));
  }

  findOne(id: number): Promise<Record> {
    return this.recordsRepository.findOne({ where: { id }, relations });
  }

  create(recordDto: RecordDto) {
    return this.recordsRepository.save(recordDto);
  }

  update(id: number, recordDto: RecordDto) {
    return this.recordsRepository.update(id, recordDto);
  }

  async remove(id: number): Promise<void> {
    await this.recordsRepository.delete(id);
  }
}
