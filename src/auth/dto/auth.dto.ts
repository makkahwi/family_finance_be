import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @Length(3, 20)
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @Length(6, 20)
  @ApiProperty()
  password: string;
}
