import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class AccountDto {
  @IsNotEmpty()
  @Length(3, 20)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @Length(3, 20)
  @ApiProperty()
  currency: string;

  @IsNotEmpty()
  @Length(3, 50)
  @ApiProperty()
  description: string;
}
