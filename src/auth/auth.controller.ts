import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserDto } from '../users/dto/user.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({
    description: 'Login By Username & Password',
  })
  @ApiBody({
    type: AuthDto,
  })
  @ApiOkResponse({
    isArray: false,
    type: UserDto,
  })
  validateUser(@Body() data) {
    const { username, password } = data;

    return this.authService.validateUser(username, password);
  }
}
