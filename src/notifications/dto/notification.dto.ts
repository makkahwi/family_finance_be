import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class NotificationDto {
  @IsNotEmpty()
  @Length(3, 20)
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @Length(3, 50)
  @ApiProperty()
  content: string;

  @IsNotEmpty()
  @ApiProperty()
  read: boolean;
}
