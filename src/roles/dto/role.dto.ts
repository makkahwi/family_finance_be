import { IsNotEmpty, Length } from 'class-validator';

export class RoleDto {
  @IsNotEmpty()
  @Length(3, 30)
  name: string;
}
