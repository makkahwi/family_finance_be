import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { findRequest } from '../utils/functions';
import { CategoryDto } from './dto/category.dto';
import { Category } from './entities/category.entity';

const relations = ['account', 'records'];

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  findAll(query) {
    return this.categoriesRepository.find(findRequest({ relations, query }));
  }

  findOne(id: string): Promise<Category> {
    return this.categoriesRepository.findOne({ where: { id }, relations });
  }

  create(categoryDto: CategoryDto) {
    return this.categoriesRepository.save(categoryDto);
  }

  update(id: string, categoryDto: CategoryDto) {
    return this.categoriesRepository.update(id, categoryDto);
  }

  async remove(id: string): Promise<void> {
    await this.categoriesRepository.delete(id);
  }
}
