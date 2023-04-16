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

import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Users List With Optional Filter Params',
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
    type: UserDto,
  })
  findAll(@Query() params) {
    return this.usersService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Users List Count With Optional Filter Params',
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
    return this.usersService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One User By ID',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiOkResponse({
    isArray: false,
    type: UserDto,
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One User',
  })
  @ApiBody({ type: UserDto })
  @ApiOkResponse({
    isArray: false,
    type: UserDto,
  })
  create(@Body() userDto: UserDto) {
    return this.usersService.create(userDto);
  }

  @Post('create-many')
  @ApiOperation({
    description: 'Create Many Users At Once',
  })
  @ApiBody({ type: UserDto, isArray: true })
  @ApiOkResponse({
    isArray: true,
    type: UserDto,
  })
  createMany(@Body() userDtos: UserDto[]) {
    return this.usersService.createMany(userDtos);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One User',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: UserDto })
  @ApiOkResponse({
    isArray: false,
    type: UserDto,
  })
  update(@Param('id') id: string, @Body() userDto: UserDto) {
    return this.usersService.update(id, userDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One User',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: UserDto })
  @ApiOkResponse({
    isArray: false,
    type: UserDto,
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Delete('delete-many')
  @ApiOperation({
    description: 'Delete Many Users At Once',
  })
  @ApiBody({ type: String, isArray: true })
  @ApiOkResponse({
    isArray: true,
    type: String,
  })
  removeMany(@Body() ids: string[]) {
    return this.usersService.removeMany(ids);
  }
}
