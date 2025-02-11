import { IsNotEmpty, IsString } from 'class-validator';

export class FindOneUserRequestDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
