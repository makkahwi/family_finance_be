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

import { NotificationsService } from './notifications.service';
import { NotificationDto } from './dto/notification.dto';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Notifications List With Optional Filter Params',
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
    type: NotificationDto,
  })
  findAll(@Query() params) {
    return this.notificationsService.findAll(params);
  }

  @Get('count')
  @ApiOperation({
    description: 'Get All Notifications List Count With Optional Filter Params',
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
    return this.notificationsService.count(params);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get One Notification By ID',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiOkResponse({
    isArray: false,
    type: NotificationDto,
  })
  findOne(@Param('id') id: string) {
    return this.notificationsService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    description: 'Create One Notification',
  })
  @ApiBody({ type: NotificationDto })
  @ApiOkResponse({
    isArray: false,
    type: NotificationDto,
  })
  create(@Body() notificationDto: NotificationDto) {
    return this.notificationsService.create(notificationDto);
  }

  @Post('create-many')
  @ApiOperation({
    description: 'Create Many Notification At Once',
  })
  @ApiBody({ type: NotificationDto, isArray: true })
  @ApiOkResponse({
    isArray: true,
    type: NotificationDto,
  })
  createMany(@Body() notificationDtos: NotificationDto[]) {
    return this.notificationsService.createMany(notificationDtos);
  }

  @Put('update/:id')
  @ApiOperation({
    description: 'Update One Notification',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: NotificationDto })
  @ApiOkResponse({
    isArray: false,
    type: NotificationDto,
  })
  update(@Param('id') id: string, @Body() notificationDto: NotificationDto) {
    return this.notificationsService.update(id, notificationDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Delete One Notification',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Uuid',
  })
  @ApiBody({ type: NotificationDto })
  @ApiOkResponse({
    isArray: false,
    type: NotificationDto,
  })
  remove(@Param('id') id: string) {
    return this.notificationsService.remove(id);
  }

  @Delete('delete-many')
  @ApiOperation({
    description: 'Delete Many Notifications At Once',
  })
  @ApiBody({ type: String, isArray: true })
  @ApiOkResponse({
    isArray: true,
    type: String,
  })
  removeMany(@Body() ids: string[]) {
    return this.notificationsService.removeMany(ids);
  }
}
