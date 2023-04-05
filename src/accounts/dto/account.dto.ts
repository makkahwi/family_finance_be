import { IsInt, IsNotEmpty, Length, Min } from 'class-validator';

export class AccountDto {
  @IsNotEmpty()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  @Length(3, 20)
  currency: string;

  @IsNotEmpty()
  @Length(3, 50)
  description: string;
}
