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

import { RecordDto } from './dto/record.dto';
import { RecordsService } from './records.service';

@ApiTags('Records')
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
  @ApiOkResponse({
    isArray: true,
    type: RecordDto,
  })
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
  @ApiOkResponse({
    isArray: false,
    type: Number,
  })
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
  @ApiOkResponse({
    isArray: false,
    type: RecordDto,
  })
  findOne(@Param('id') id: string) {
    return this.recordsService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One Record',
  })
  @ApiBody({ type: RecordDto })
  @ApiOkResponse({
    isArray: false,
    type: RecordDto,
  })
  create(@Body() recordDto: RecordDto) {
    return this.recordsService.create(recordDto);
  }

  @Post('create-many')
  @ApiOperation({
    description: 'Create Many Records At Once',
  })
  @ApiBody({ type: RecordDto, isArray: true })
  @ApiOkResponse({
    isArray: true,
    type: RecordDto,
  })
  createMany(@Body() recordDtos: RecordDto[]) {
    return this.recordsService.createMany(recordDtos);
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
  @ApiOkResponse({
    isArray: false,
    type: RecordDto,
  })
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
  @ApiOkResponse({
    isArray: false,
    type: RecordDto,
  })
  remove(@Param('id') id: string) {
    return this.recordsService.remove(id);
  }
}
