import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { FamilyDto } from './dto/family.dto';
import { FamiliesService } from './families.service';

@Controller('families')
export class FamiliesController {
  constructor(private readonly familiesService: FamiliesService) {}

  @Get()
  findAll() {
    return this.familiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.familiesService.findOne(+id);
  }

  @Post()
  create(@Body() familyDto: FamilyDto) {
    return this.familiesService.create(familyDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() familyDto: FamilyDto) {
    return this.familiesService.update(+id, familyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.familiesService.remove(+id);
  }
}
