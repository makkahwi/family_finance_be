import { IsNotEmpty, Length } from 'class-validator';

export class CategoryDto {
  @IsNotEmpty()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  @Length(3, 20)
  type: string;
}
