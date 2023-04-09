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

  findOne(id: string): Promise<Record> {
    return this.recordsRepository.findOne({ where: { id }, relations });
  }

  create(recordDto: RecordDto) {
    return this.recordsRepository.save(recordDto);
  }

  update(id: string, recordDto: RecordDto) {
    return this.recordsRepository.update(id, recordDto);
  }

  async remove(id: string): Promise<void> {
    await this.recordsRepository.delete(id);
  }
}
