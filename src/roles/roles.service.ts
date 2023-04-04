import { DataSource } from 'typeorm';
import { Role } from './entities/role.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  create(createRoleDto: CreateRoleDto) {
    return this.rolesRepository.save(createRoleDto);
  }

  findAll() {
    return this.rolesRepository.find({ relations: ['users'] });
  }

  findOne(id: number): Promise<Role> {
    return this.rolesRepository.findOneBy({ id });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.rolesRepository.update(id, updateRoleDto);
  }

  async remove(id: number): Promise<void> {
    await this.rolesRepository.delete(id);
  }
}
