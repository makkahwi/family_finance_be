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

import { AccountsService } from './accounts.service';
import { AccountDto } from './dto/account.dto';

@ApiTags('Accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Accounts List With Optional Filter Params',
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
    type: AccountDto,
  })
  findAll(@Query() params) {
    return this.accountsService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Accounts List Count With Optional Filter Params',
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
    return this.accountsService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One Account By ID',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiOkResponse({
    isArray: false,
    type: AccountDto,
  })
  findOne(@Param('id') id: string) {
    return this.accountsService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One Account',
  })
  @ApiBody({ type: AccountDto })
  @ApiOkResponse({
    isArray: false,
    type: AccountDto,
  })
  create(@Body() accountDto: AccountDto) {
    return this.accountsService.create(accountDto);
  }

  @Post('create-many')
  @ApiOperation({
    description: 'Create Many Account At Once',
  })
  @ApiBody({ type: AccountDto, isArray: true })
  @ApiOkResponse({
    isArray: true,
    type: AccountDto,
  })
  createMany(@Body() accountDtos: AccountDto[]) {
    return this.accountsService.createMany(accountDtos);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One Account',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: AccountDto })
  @ApiOkResponse({
    isArray: false,
    type: AccountDto,
  })
  update(@Param('id') id: string, @Body() accountDto: AccountDto) {
    return this.accountsService.update(id, accountDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One Account',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: AccountDto })
  @ApiOkResponse({
    isArray: false,
    type: AccountDto,
  })
  remove(@Param('id') id: string) {
    return this.accountsService.remove(id);
  }
}
