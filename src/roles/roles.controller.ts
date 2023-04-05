import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { RoleDto } from './dto/role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Post()
  create(@Body() roleDto: RoleDto) {
    return this.rolesService.create(roleDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() roleDto: RoleDto) {
    return this.rolesService.update(+id, roleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
