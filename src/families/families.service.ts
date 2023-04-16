import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NotFoundHandler, findRequest } from '../utils/functions';
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

  async findOne(id: string) {
    return NotFoundHandler({
      action: 'find',
      result: await this.familiesRepository.findOne({
        where: { id },
        relations,
      }),
    });
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

  async update(id: string, familyDto: FamilyDto) {
    return NotFoundHandler({
      action: 'update',
      result: await this.familiesRepository.update(id, familyDto),
    });
  }

  async remove(id: string) {
    return NotFoundHandler({
      action: 'delete',
      result: await this.familiesRepository.delete(id),
    });
  }
}
