import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class RoleDto {
  @IsNotEmpty()
  @Length(3, 30)
  @ApiProperty()
  name: string;
}
