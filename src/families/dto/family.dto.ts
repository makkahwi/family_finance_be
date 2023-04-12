import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class FamilyDto {
  @IsNotEmpty()
  @Length(3, 20)
  @ApiProperty()
  name: string;
}
