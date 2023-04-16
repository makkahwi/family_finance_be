import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NotFoundHandler, findRequest } from '../utils/functions';
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

  count(query) {
    return this.recordsRepository.count(findRequest({ relations, query }));
  }

  async findOne(id: string) {
    return NotFoundHandler({
      action: 'find',
      result: await this.recordsRepository.findOne({
        where: { id },
        relations,
      }),
    });
  }

  create(recordDto: RecordDto) {
    return this.recordsRepository.save(recordDto);
  }

  createMany(recordDtos: RecordDto[]) {
    const batch = [];
    recordDtos.forEach((recordDto) => {
      batch.push(this.recordsRepository.create(recordDto));
    });
    return this.recordsRepository.save(batch);
  }

  async update(id: string, recordDto: RecordDto) {
    return NotFoundHandler({
      action: 'update',
      result: await this.recordsRepository.update(id, recordDto),
    });
  }

  async remove(id: string) {
    return NotFoundHandler({
      action: 'delete',
      result: await this.recordsRepository.delete(id),
    });
  }

  async removeMany(ids: string[]) {
    return NotFoundHandler({
      action: 'delete',
      result: await this.recordsRepository.delete(ids),
    });
  }
}
