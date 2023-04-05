import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RecordDto } from './dto/record.dto';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get()
  findAll() {
    return this.recordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordsService.findOne(+id);
  }

  @Post()
  create(@Body() createRecordDto: RecordDto) {
    return this.recordsService.create(createRecordDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordDto: RecordDto) {
    return this.recordsService.update(+id, updateRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordsService.remove(+id);
  }
}
