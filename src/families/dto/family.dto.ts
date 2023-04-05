import { IsNotEmpty, Length } from 'class-validator';

export class FamilyDto {
  @IsNotEmpty()
  @Length(3, 20)
  name: string;
}
