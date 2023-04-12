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

import { TransferDto } from './dto/transfer.dto';
import { TransfersService } from './transfers.service';

@ApiTags('Transfers')
@Controller('transfers')
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Transfers List With Optional Filter Params',
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
    type: TransferDto,
  })
  findAll(@Query() params) {
    return this.transfersService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Transfers List Count With Optional Filter Params',
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
    return this.transfersService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One Transfer By ID',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiOkResponse({
    isArray: false,
    type: TransferDto,
  })
  findOne(@Param('id') id: string) {
    return this.transfersService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One Transfer',
  })
  @ApiBody({ type: TransferDto })
  @ApiOkResponse({
    isArray: false,
    type: TransferDto,
  })
  create(@Body() transferDto: TransferDto) {
    return this.transfersService.create(transferDto);
  }

  @Post('create-many')
  @ApiOperation({
    description: 'Create Many Transfers At Once',
  })
  @ApiBody({ type: TransferDto, isArray: true })
  @ApiOkResponse({
    isArray: true,
    type: TransferDto,
  })
  createMany(@Body() transferDtos: TransferDto[]) {
    return this.transfersService.createMany(transferDtos);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One Transfer',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: TransferDto })
  @ApiOkResponse({
    isArray: false,
    type: TransferDto,
  })
  update(@Param('id') id: string, @Body() transferDto: TransferDto) {
    return this.transfersService.update(id, transferDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One Transfer',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: TransferDto })
  @ApiOkResponse({
    isArray: false,
    type: TransferDto,
  })
  remove(@Param('id') id: string) {
    return this.transfersService.remove(id);
  }
}
