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
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto/category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Categories List With Optional Filter Params',
  })
  @ApiParam({
    name: 'propertyKey_bte',
    type: Number,
    required: false,
    description:
      'Filter list by property key values to return ones with bigger than or equal given value(s)',
  })
  @ApiParam({
    name: 'propertyKey_bt',
    type: Number,
    required: false,
    description:
      'Filter list by property key values to return ones with bigger than given value(s)',
  })
  @ApiParam({
    name: 'propertyKey_ste',
    type: Number,
    required: false,
    description:
      'Filter list by property key values to return ones with smaller than or equal given value(s)',
  })
  @ApiParam({
    name: 'propertyKey_st',
    type: Number,
    required: false,
    description:
      'Filter list by property key values to return ones with smaller than given value(s)',
  })
  @ApiParam({
    name: 'propertyKey_ne',
    type: Number,
    required: false,
    description:
      'Filter list by property key values to return ones that not equal given value(s)',
  })
  @ApiParam({
    name: 'propertyKey_lk',
    type: String,
    required: false,
    description:
      'Filter list by property key values to return ones like given value(s)',
  })
  @ApiParam({
    name: 'propertyKey_sort',
    type: String,
    required: false,
    description: 'Sort list by property key values ("asc" or "desc")',
  })
  @ApiOkResponse({
    isArray: true,
    type: CategoryDto,
  })
  @ApiTags('Categories')
  findAll(@Query() params) {
    return this.categoriesService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Categories List Count With Optional Filter Params',
  })
  @ApiParam({
    name: 'propertyKey_bte',
    type: Number,
    required: false,
    description:
      'Filter list by property key values to return ones with bigger than or equal given value(s)',
  })
  @ApiParam({
    name: 'propertyKey_bt',
    type: Number,
    required: false,
    description:
      'Filter list by property key values to return ones with bigger than given value(s)',
  })
  @ApiParam({
    name: 'propertyKey_ste',
    type: Number,
    required: false,
    description:
      'Filter list by property key values to return ones with smaller than or equal given value(s)',
  })
  @ApiParam({
    name: 'propertyKey_st',
    type: Number,
    required: false,
    description:
      'Filter list by property key values to return ones with smaller than given value(s)',
  })
  @ApiParam({
    name: 'propertyKey_ne',
    type: Number,
    required: false,
    description:
      'Filter list by property key values to return ones that not equal given value(s)',
  })
  @ApiParam({
    name: 'propertyKey_lk',
    type: String,
    required: false,
    description:
      'Filter list by property key values to return ones like given value(s)',
  })
  @ApiParam({
    name: 'propertyKey_sort',
    type: String,
    required: false,
    description: 'Sort list by property key values ("asc" or "desc")',
  })
  @ApiOkResponse({
    isArray: false,
    type: Number,
  })
  @ApiTags('Categories')
  count(@Query() params) {
    return this.categoriesService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One Category By ID',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiOkResponse({
    isArray: false,
    type: CategoryDto,
  })
  @ApiTags('Categories')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One Category',
  })
  @ApiBody({ type: CategoryDto })
  @ApiOkResponse({
    isArray: false,
    type: CategoryDto,
  })
  @ApiTags('Categories')
  create(@Body() categoryDto: CategoryDto) {
    return this.categoriesService.create(categoryDto);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One Category',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: CategoryDto })
  @ApiOkResponse({
    isArray: false,
    type: CategoryDto,
  })
  @ApiTags('Categories')
  update(@Param('id') id: string, @Body() categoryDto: CategoryDto) {
    return this.categoriesService.update(id, categoryDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One Category',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: CategoryDto })
  @ApiOkResponse({
    isArray: false,
    type: CategoryDto,
  })
  @ApiTags('Categories')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
