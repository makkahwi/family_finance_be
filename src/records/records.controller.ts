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

import { RecordDto } from './dto/record.dto';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Records List',
  })
  @ApiTags('Records')
  findAll(@Query() params) {
    return this.recordsService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Records List Count',
  })
  @ApiTags('Records')
  count(@Query() params) {
    return this.recordsService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One Record By ID',
  })
  @ApiTags('Records')
  findOne(@Param('id') id: string) {
    return this.recordsService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One Record',
  })
  @ApiTags('Records')
  create(@Body() recordDto: RecordDto) {
    return this.recordsService.create(recordDto);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One Record',
  })
  @ApiTags('Records')
  update(@Param('id') id: string, @Body() recordDto: RecordDto) {
    return this.recordsService.update(id, recordDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One Record',
  })
  @ApiTags('Records')
  remove(@Param('id') id: string) {
    return this.recordsService.remove(id);
  }
}
