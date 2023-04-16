import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NotFoundHandler, findRequest } from '../utils/functions';
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

  count(query) {
    return this.categoriesRepository.count(findRequest({ relations, query }));
  }

  async findOne(id: string) {
    return NotFoundHandler({
      action: 'find',
      result: await this.categoriesRepository.findOne({
        where: { id },
        relations,
      }),
    });
  }

  create(categoryDto: CategoryDto) {
    return this.categoriesRepository.save(categoryDto);
  }

  createMany(categoryDtos: CategoryDto[]) {
    const batch = [];
    categoryDtos.forEach((categoryDto) => {
      batch.push(this.categoriesRepository.create(categoryDto));
    });
    return this.categoriesRepository.save(batch);
  }

  async update(id: string, categoryDto: CategoryDto) {
    return NotFoundHandler({
      action: 'update',
      result: await this.categoriesRepository.update(id, categoryDto),
    });
  }

  async remove(id: string) {
    return NotFoundHandler({
      action: 'delete',
      result: await this.categoriesRepository.delete(id),
    });
  }
}
