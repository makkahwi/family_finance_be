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

import { FamilyDto } from './dto/family.dto';
import { FamiliesService } from './families.service';

@Controller('families')
export class FamiliesController {
  constructor(private readonly familiesService: FamiliesService) {}

  @Get()
  findAll(@Query() params) {
    return this.familiesService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.familiesService.findOne(+id);
  }

  @Post('create')
  create(@Body() familyDto: FamilyDto) {
    return this.familiesService.create(familyDto);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() familyDto: FamilyDto) {
    return this.familiesService.update(+id, familyDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.familiesService.remove(+id);
  }
}
