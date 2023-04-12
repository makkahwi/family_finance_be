import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Min } from 'class-validator';

export class TransferDto {
  @IsNotEmpty()
  @Min(0.1)
  @ApiProperty()
  amount: number;

  @IsNotEmpty()
  @ApiProperty()
  exchangeRate: number;
}
