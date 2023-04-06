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

  findOne(id: number): Promise<Role> {
    return this.rolesRepository.findOne({ where: { id }, relations });
  }

  create(roleDto: RoleDto) {
    return this.rolesRepository.save(roleDto);
  }

  update(id: number, roleDto: RoleDto) {
    return this.rolesRepository.update(id, roleDto);
  }

  async remove(id: number): Promise<void> {
    await this.rolesRepository.delete(id);
  }
}
