import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, Min } from 'class-validator';

export class RecordDto {
  @IsNotEmpty()
  @Min(0)
  @ApiProperty()
  value: number;

  @Length(0, 30)
  @ApiProperty()
  note: string;

  @IsNotEmpty()
  @Length(10, 20)
  @ApiProperty()
  timestamp: string;
}
