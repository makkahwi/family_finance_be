import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';
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
    return this.familiesRepository.findOneBy({ id });
  }

  create(createFamilyDto: CreateFamilyDto) {
    return this.familiesRepository.save(createFamilyDto);
  }

  update(id: number, updateFamilyDto: UpdateFamilyDto) {
    return this.familiesRepository.update(id, updateFamilyDto);
  }

  async remove(id: number): Promise<void> {
    await this.familiesRepository.delete(id);
  }
}
