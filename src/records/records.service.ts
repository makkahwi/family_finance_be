import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecordDto } from './dto/record.dto';
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
