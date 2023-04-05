import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/category.dto';
import { Category } from './entities/category.entity';

const relations = ['account', 'records'];

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  findAll() {
    return this.categoriesRepository.find({
      relations,
    });
  }

  findOne(id: number): Promise<Category> {
    return this.categoriesRepository.findOne({ where: { id }, relations });
  }

  create(createCategoryDto: CategoryDto) {
    return this.categoriesRepository.save(createCategoryDto);
  }

  update(id: number, updateCategoryDto: CategoryDto) {
    return this.categoriesRepository.update(id, updateCategoryDto);
  }

  async remove(id: number): Promise<void> {
    await this.categoriesRepository.delete(id);
  }
}
