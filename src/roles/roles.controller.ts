import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { RoleDto } from './dto/role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Roles List',
  })
  @ApiTags('Roles')
  findAll(@Query() params) {
    return this.rolesService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Roles List Count',
  })
  @ApiTags('Roles')
  count(@Query() params) {
    return this.rolesService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One Role By ID',
  })
  @ApiTags('Roles')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One Role',
  })
  @ApiTags('Roles')
  create(@Body() roleDto: RoleDto) {
    return this.rolesService.create(roleDto);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One Role',
  })
  @ApiTags('Roles')
  update(@Param('id') id: string, @Body() roleDto: RoleDto) {
    return this.rolesService.update(id, roleDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One Role',
  })
  @ApiTags('Roles')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(id);
  }
}
