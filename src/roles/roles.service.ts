import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NotFoundHandler, findRequest } from '../utils/functions';
import { RoleDto } from './dto/role.dto';
import { Role } from './entities/role.entity';

const relations = ['users'];

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  findAll(query) {
    return this.rolesRepository.find(findRequest({ query, relations }));
  }

  count(query) {
    return this.rolesRepository.count(findRequest({ relations, query }));
  }

  async findOne(id: string) {
    return NotFoundHandler({
      action: 'find',
      result: await this.rolesRepository.findOne({
        where: { id },
        relations,
      }),
    });
  }

  create(roleDto: RoleDto) {
    return this.rolesRepository.save(roleDto);
  }

  createMany(roleDtos: RoleDto[]) {
    const batch = [];
    roleDtos.forEach((roleDto) => {
      batch.push(this.rolesRepository.create(roleDto));
    });
    return this.rolesRepository.save(batch);
  }

  async update(id: string, roleDto: RoleDto) {
    return NotFoundHandler({
      action: 'update',
      result: await this.rolesRepository.update(id, roleDto),
    });
  }

  async remove(id: string) {
    return NotFoundHandler({
      action: 'delete',
      result: await this.rolesRepository.delete(id),
    });
  }

  async removeMany(ids: string[]) {
    return NotFoundHandler({
      action: 'delete',
      result: await this.rolesRepository.delete(ids),
    });
  }
}
