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

  create(createRecordDto: RecordDto) {
    return this.recordsRepository.save(createRecordDto);
  }

  update(id: number, updateRecordDto: RecordDto) {
    return this.recordsRepository.update(id, updateRecordDto);
  }

  async remove(id: number): Promise<void> {
    await this.recordsRepository.delete(id);
  }
}
