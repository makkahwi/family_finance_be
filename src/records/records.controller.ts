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

import { RecordDto } from './dto/record.dto';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get()
  findAll(@Query() params) {
    return this.recordsService.findAll(params);
  }

  @Get('count')
  count(@Query() params) {
    return this.recordsService.count(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordsService.findOne(id);
  }

  @Post('create')
  create(@Body() recordDto: RecordDto) {
    return this.recordsService.create(recordDto);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() recordDto: RecordDto) {
    return this.recordsService.update(id, recordDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.recordsService.remove(id);
  }
}
