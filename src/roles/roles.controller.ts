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

import { RoleDto } from './dto/role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  findAll(@Query() params) {
    return this.rolesService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Post('create')
  create(@Body() roleDto: RoleDto) {
    return this.rolesService.create(roleDto);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() roleDto: RoleDto) {
    return this.rolesService.update(+id, roleDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
