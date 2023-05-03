import { BadRequestException, Injectable } from '@nestjs/common';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  validateUser(username: string, password: string) {
    return this.usersService.findOne(username).then((user) => {
      if (user.password === password) {
        const { password, ...rest } = user;
        return rest;
      } else {
        throw new BadRequestException();
      }
    });
  }
}
