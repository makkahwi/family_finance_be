import { IsNotEmpty, Length, Min } from 'class-validator';

export class RecordDto {
  @IsNotEmpty()
  @Min(0)
  value: number;

  @Length(0, 30)
  note: string;

  @IsNotEmpty()
  @Length(10, 20)
  timestamp: string;
}
