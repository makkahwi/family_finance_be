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

import { RoleDto } from './dto/role.dto';
import { RolesService } from './roles.service';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Roles List With Optional Filter Params',
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
    type: RoleDto,
  })
  findAll(@Query() params) {
    return this.rolesService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Roles List Count With Optional Filter Params',
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
    return this.rolesService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One Role By ID',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiOkResponse({
    isArray: false,
    type: RoleDto,
  })
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One Role',
  })
  @ApiBody({ type: RoleDto })
  @ApiOkResponse({
    isArray: false,
    type: RoleDto,
  })
  create(@Body() roleDto: RoleDto) {
    return this.rolesService.create(roleDto);
  }

  @Post('create-many')
  @ApiOperation({
    description: 'Create Many Roles At Once',
  })
  @ApiBody({ type: RoleDto, isArray: true })
  @ApiOkResponse({
    isArray: true,
    type: RoleDto,
  })
  createMany(@Body() roleDtos: RoleDto[]) {
    return this.rolesService.createMany(roleDtos);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One Role',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: RoleDto })
  @ApiOkResponse({
    isArray: false,
    type: RoleDto,
  })
  update(@Param('id') id: string, @Body() roleDto: RoleDto) {
    return this.rolesService.update(id, roleDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One Role',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: RoleDto })
  @ApiOkResponse({
    isArray: false,
    type: RoleDto,
  })
  remove(@Param('id') id: string) {
    return this.rolesService.remove(id);
  }

  @Delete('delete-many')
  @ApiOperation({
    description: 'Delete Many Roles At Once',
  })
  @ApiBody({ type: String, isArray: true })
  @ApiOkResponse({
    isArray: true,
    type: String,
  })
  removeMany(@Body() ids: string[]) {
    return this.rolesService.removeMany(ids);
  }
}
