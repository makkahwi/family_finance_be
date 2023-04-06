import { IsNotEmpty, Min } from 'class-validator';

export class TransferDto {
  @IsNotEmpty()
  @Min(0.1)
  amount: number;

  @IsNotEmpty()
  exchangeRate: number;
}
