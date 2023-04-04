import { DataSource } from 'typeorm';
import { Family } from './entities/family.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';
import { Repository } from 'typeorm';

@Injectable()
export class FamiliesService {
  constructor(
    @InjectRepository(Family)
    private familiesRepository: Repository<Family>,
  ) {}

  create(createFamilyDto: CreateFamilyDto) {
    return this.familiesRepository.save(createFamilyDto);
  }

  findAll() {
    return this.familiesRepository.find();
  }

  findOne(id: number): Promise<Family> {
    return this.familiesRepository.findOneBy({ id });
  }

  update(id: number, updateFamilyDto: UpdateFamilyDto) {
    return this.familiesRepository.update(id, updateFamilyDto);
  }

  async remove(id: number): Promise<void> {
    await this.familiesRepository.delete(id);
  }
}
