import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { findRequest } from '../utils/functions';
import { FamilyDto } from './dto/family.dto';
import { Family } from './entities/family.entity';

const relations = ['users', 'accounts'];

@Injectable()
export class FamiliesService {
  constructor(
    @InjectRepository(Family)
    private familiesRepository: Repository<Family>,
  ) {}

  findAll(query) {
    return this.familiesRepository.find(findRequest({ relations, query }));
  }

  count(query) {
    return this.familiesRepository.count(findRequest({ relations, query }));
  }

  findOne(id: string): Promise<Family> {
    return this.familiesRepository.findOne({ where: { id }, relations });
  }

  create(familyDto: FamilyDto) {
    return this.familiesRepository.save(familyDto);
  }

  createMany(familyDtos: FamilyDto[]) {
    const batch = [];
    familyDtos.forEach((familyDto) => {
      batch.push(this.familiesRepository.create(familyDto));
    });
    return this.familiesRepository.save(batch);
  }

  update(id: string, familyDto: FamilyDto) {
    return this.familiesRepository.update(id, familyDto);
  }

  remove(id: string) {
    return this.familiesRepository.delete(id);
  }
}
