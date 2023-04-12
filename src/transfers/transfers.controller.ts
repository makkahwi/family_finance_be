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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { TransferDto } from './dto/transfer.dto';
import { TransfersService } from './transfers.service';

@Controller('transfers')
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Transfers List',
  })
  @ApiTags('Transfers')
  findAll(@Query() params) {
    return this.transfersService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Transfers List Count',
  })
  @ApiTags('Transfers')
  count(@Query() params) {
    return this.transfersService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One Transfer By ID',
  })
  @ApiTags('Transfers')
  findOne(@Param('id') id: string) {
    return this.transfersService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One Transfer',
  })
  @ApiTags('Transfers')
  create(@Body() transferDto: TransferDto) {
    return this.transfersService.create(transferDto);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One Transfer',
  })
  @ApiTags('Transfers')
  update(@Param('id') id: string, @Body() transferDto: TransferDto) {
    return this.transfersService.update(id, transferDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One Transfer',
  })
  @ApiTags('Transfers')
  remove(@Param('id') id: string) {
    return this.transfersService.remove(id);
  }
}
