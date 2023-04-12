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
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AccountsService } from './accounts.service';
import { AccountDto } from './dto/account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Accounts List',
  })
  @ApiTags('Accounts')
  findAll(@Query() params) {
    return this.accountsService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Accounts List Count',
  })
  @ApiTags('Accounts')
  count(@Query() params) {
    return this.accountsService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One Account By ID',
  })
  @ApiTags('Accounts')
  findOne(@Param('id') id: string) {
    return this.accountsService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One Account',
  })
  @ApiBody({ type: AccountDto })
  @ApiTags('Accounts')
  create(@Body() accountDto: AccountDto) {
    return this.accountsService.create(accountDto);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One Account',
  })
  @ApiBody({ type: AccountDto })
  @ApiTags('Accounts')
  update(@Param('id') id: string, @Body() accountDto: AccountDto) {
    return this.accountsService.update(id, accountDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One Account',
  })
  @ApiBody({ type: AccountDto })
  @ApiTags('Accounts')
  remove(@Param('id') id: string) {
    return this.accountsService.remove(id);
  }
}
