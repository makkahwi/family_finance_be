import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleDto } from './dto/role.dto';
import { Role } from './entities/role.entity';

const relations = ['users'];

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  findAll() {
    return this.rolesRepository.find({ relations });
  }

  findOne(id: number): Promise<Role> {
    return this.rolesRepository.findOne({ where: { id }, relations });
  }

  create(RoleDto: RoleDto) {
    return this.rolesRepository.save(RoleDto);
  }

  update(id: number, RoleDto: RoleDto) {
    return this.rolesRepository.update(id, RoleDto);
  }

  async remove(id: number): Promise<void> {
    await this.rolesRepository.delete(id);
  }
}
