import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { TransferDto } from './dto/transfer.dto';
import { TransfersService } from './transfers.service';

@Controller('transfers')
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  @Get()
  findAll() {
    return this.transfersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transfersService.findOne(+id);
  }

  @Post()
  create(@Body() transferDto: TransferDto) {
    return this.transfersService.create(transferDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() transferDto: TransferDto) {
    return this.transfersService.update(+id, transferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transfersService.remove(+id);
  }
}
