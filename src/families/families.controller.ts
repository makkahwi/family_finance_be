import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { FamilyDto } from './dto/family.dto';
import { FamiliesService } from './families.service';

@Controller('families')
export class FamiliesController {
  constructor(private readonly familiesService: FamiliesService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Families List',
  })
  @ApiTags('Families')
  findAll(@Query() params) {
    return this.familiesService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Families List Count',
  })
  @ApiTags('Families')
  count(@Query() params) {
    return this.familiesService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One Family By ID',
  })
  @ApiTags('Families')
  findOne(@Param('id') id: string) {
    return this.familiesService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One Family',
  })
  @ApiBody({ type: FamilyDto })
  @ApiTags('Families')
  create(@Body() familyDto: FamilyDto) {
    return this.familiesService.create(familyDto);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One Family',
  })
  @ApiBody({ type: FamilyDto })
  @ApiTags('Families')
  update(@Param('id') id: string, @Body() familyDto: FamilyDto) {
    return this.familiesService.update(id, familyDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One Family',
  })
  @ApiBody({ type: FamilyDto })
  @ApiTags('Families')
  remove(@Param('id') id: string) {
    return this.familiesService.remove(id);
  }
}
