import { IsInt, IsNotEmpty, Length, Min } from 'class-validator';

export class RecordDto {
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  value: number;

  @IsNotEmpty()
  @Length(3, 30)
  note: string;

  @IsNotEmpty()
  @Length(10, 20)
  timestamp: string;
}
