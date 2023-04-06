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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsService.findOne(+id);
  }

  @Post()
  create(@Body() accountDto: AccountDto) {
    return this.accountsService.create(accountDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() accountDto: AccountDto) {
    return this.accountsService.update(+id, accountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsService.remove(+id);
  }
}
