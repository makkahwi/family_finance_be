import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto/category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Categories List',
  })
  @ApiTags('Categories')
  findAll(@Query() params) {
    return this.categoriesService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Categories List Count',
  })
  @ApiTags('Categories')
  count(@Query() params) {
    return this.categoriesService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One Category By ID',
  })
  @ApiTags('Categories')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One Category',
  })
  @ApiTags('Categories')
  create(@Body() categoryDto: CategoryDto) {
    return this.categoriesService.create(categoryDto);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One Category',
  })
  @ApiTags('Categories')
  update(@Param('id') id: string, @Body() categoryDto: CategoryDto) {
    return this.categoriesService.update(id, categoryDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One Category',
  })
  @ApiTags('Categories')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
