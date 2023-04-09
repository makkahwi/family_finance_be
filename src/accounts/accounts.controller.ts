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

import { AccountsService } from './accounts.service';
import { AccountDto } from './dto/account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  findAll(@Query() params) {
    return this.accountsService.findAll(params);
  }

  @Get('count')
  count(@Query() params) {
    return this.accountsService.count(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsService.findOne(id);
  }

  @Post('create')
  create(@Body() accountDto: AccountDto) {
    return this.accountsService.create(accountDto);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() accountDto: AccountDto) {
    return this.accountsService.update(id, accountDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.accountsService.remove(id);
  }
}
