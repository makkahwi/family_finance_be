import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FamilyDto } from './dto/family.dto';
import { Family } from './entities/family.entity';

const relations = ['users', 'accounts'];

@Injectable()
export class FamiliesService {
  constructor(
    @InjectRepository(Family)
    private familiesRepository: Repository<Family>,
  ) {}

  findAll() {
    return this.familiesRepository.find({ relations });
  }

  findOne(id: number): Promise<Family> {
    return this.familiesRepository.findOne({ where: { id }, relations });
  }

  create(createFamilyDto: FamilyDto) {
    return this.familiesRepository.save(createFamilyDto);
  }

  update(id: number, updateFamilyDto: FamilyDto) {
    return this.familiesRepository.update(id, updateFamilyDto);
  }

  async remove(id: number): Promise<void> {
    await this.familiesRepository.delete(id);
  }
}
