import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Users List',
  })
  @ApiTags('Users')
  findAll(@Query() params) {
    return this.usersService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Users List Count',
  })
  @ApiTags('Users')
  count(@Query() params) {
    return this.usersService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One User By ID',
  })
  @ApiTags('Users')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One User',
  })
  @ApiBody({ type: UserDto })
  @ApiTags('Users')
  create(@Body() userDto: UserDto) {
    return this.usersService.create(userDto);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One User',
  })
  @ApiBody({ type: UserDto })
  @ApiTags('Users')
  update(@Param('id') id: string, @Body() userDto: UserDto) {
    return this.usersService.update(id, userDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One User',
  })
  @ApiBody({ type: UserDto })
  @ApiTags('Users')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
