import { IsEmail } from 'class-validator';
import { IsNotEmpty, Length } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(8, 30)
  email: string;

  @IsNotEmpty()
  @Length(3, 20)
  username: string;

  @IsNotEmpty()
  @Length(6, 20)
  password: string;
}
