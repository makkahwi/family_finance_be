import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { findRequest } from '../utils/functions';
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

  findOne(id: string): Promise<Role> {
    return this.rolesRepository.findOne({ where: { id }, relations });
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

  update(id: string, roleDto: RoleDto) {
    return this.rolesRepository.update(id, roleDto);
  }

  async remove(id: string): Promise<void> {
    await this.rolesRepository.delete(id);
  }
}
