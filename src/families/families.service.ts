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

  create(familyDto: FamilyDto) {
    return this.familiesRepository.save(familyDto);
  }

  update(id: number, familyDto: FamilyDto) {
    return this.familiesRepository.update(id, familyDto);
  }

  async remove(id: number): Promise<void> {
    await this.familiesRepository.delete(id);
  }
}
