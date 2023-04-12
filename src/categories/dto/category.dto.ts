import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CategoryDto {
  @IsNotEmpty()
  @Length(3, 20)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @Length(3, 20)
  @ApiProperty()
  type: string;
}
