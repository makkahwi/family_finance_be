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

import { FamilyDto } from './dto/family.dto';
import { FamiliesService } from './families.service';

@ApiTags('Families')
@Controller('families')
export class FamiliesController {
  constructor(private readonly familiesService: FamiliesService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Families List With Optional Filter Params',
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
    type: FamilyDto,
  })
  findAll(@Query() params) {
    return this.familiesService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Families List Count With Optional Filter Params',
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
  count(@Query() params) {
    return this.familiesService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One Family By ID',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiOkResponse({
    isArray: false,
    type: FamilyDto,
  })
  findOne(@Param('id') id: string) {
    return this.familiesService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One Family',
  })
  @ApiBody({ type: FamilyDto })
  @ApiOkResponse({
    isArray: false,
    type: FamilyDto,
  })
  create(@Body() familyDto: FamilyDto) {
    return this.familiesService.create(familyDto);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One Family',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: FamilyDto })
  @ApiOkResponse({
    isArray: false,
    type: FamilyDto,
  })
  update(@Param('id') id: string, @Body() familyDto: FamilyDto) {
    return this.familiesService.update(id, familyDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One Family',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: FamilyDto })
  @ApiOkResponse({
    isArray: false,
    type: FamilyDto,
  })
  remove(@Param('id') id: string) {
    return this.familiesService.remove(id);
  }
}
