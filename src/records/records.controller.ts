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
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import { RecordDto } from './dto/record.dto';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Records List With Optional Filter Params',
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
  @ApiTags('Records')
  findAll(@Query() params) {
    return this.recordsService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Records List Count With Optional Filter Params',
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
  @ApiTags('Records')
  count(@Query() params) {
    return this.recordsService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One Record By ID',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiTags('Records')
  findOne(@Param('id') id: string) {
    return this.recordsService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One Record',
  })
  @ApiBody({ type: RecordDto })
  @ApiTags('Records')
  create(@Body() recordDto: RecordDto) {
    return this.recordsService.create(recordDto);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One Record',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: RecordDto })
  @ApiTags('Records')
  update(@Param('id') id: string, @Body() recordDto: RecordDto) {
    return this.recordsService.update(id, recordDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One Record',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: RecordDto })
  @ApiTags('Records')
  remove(@Param('id') id: string) {
    return this.recordsService.remove(id);
  }
}
