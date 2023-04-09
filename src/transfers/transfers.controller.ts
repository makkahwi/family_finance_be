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

import { TransferDto } from './dto/transfer.dto';
import { TransfersService } from './transfers.service';

@Controller('transfers')
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  @Get()
  findAll(@Query() params) {
    return this.transfersService.findAll(params);
  }

  @Get('count')
  count(@Query() params) {
    return this.transfersService.count(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transfersService.findOne(id);
  }

  @Post('create')
  create(@Body() transferDto: TransferDto) {
    return this.transfersService.create(transferDto);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() transferDto: TransferDto) {
    return this.transfersService.update(id, transferDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.transfersService.remove(id);
  }
}
