import { IsInt, IsNotEmpty, Length, Min } from 'class-validator';

export class TransferDto {
  @IsNotEmpty()
  @IsInt()
  @Min(0.1)
  amount: number;

  @IsNotEmpty()
  @IsInt()
  exchangeRate: number;
}
