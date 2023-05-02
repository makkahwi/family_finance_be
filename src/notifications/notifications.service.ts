import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NotFoundHandler, findRequest } from '../utils/functions';
import { NotificationDto } from './dto/notification.dto';
import { Notification } from './entities/notification.entity';

const relations = ['user'];

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private notificationsRepository: Repository<Notification>,
  ) {}

  findAll(query) {
    return this.notificationsRepository.find(findRequest({ relations, query }));
  }

  count(query) {
    return this.notificationsRepository.count(
      findRequest({ relations, query }),
    );
  }

  async findOne(id: string) {
    return NotFoundHandler({
      action: 'find',
      result: await this.notificationsRepository.findOne({
        where: { id },
        relations,
      }),
    });
  }

  create(notificationDto: NotificationDto) {
    return this.notificationsRepository.save(notificationDto);
  }

  createMany(notificationDtos: NotificationDto[]) {
    const batch = [];
    notificationDtos.forEach((notificationDto) => {
      batch.push(this.notificationsRepository.create(notificationDto));
    });
    return this.notificationsRepository.save(batch);
  }

  async update(id: string, notificationDto: NotificationDto) {
    return NotFoundHandler({
      action: 'update',
      result: await this.notificationsRepository.update(id, notificationDto),
    });
  }

  async remove(id: string) {
    return NotFoundHandler({
      action: 'delete',
      result: await this.notificationsRepository.delete(id),
    });
  }

  async removeMany(ids: string[]) {
    return NotFoundHandler({
      action: 'delete',
      result: await this.notificationsRepository.delete(ids),
    });
  }
}
