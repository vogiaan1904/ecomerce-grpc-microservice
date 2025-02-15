import { IsNotEmpty, IsString } from 'class-validator';

export class FindUserByIdRequestDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}

export class FindUserByEmailRequestDto {
  @IsNotEmpty()
  @IsString()
  email: string;
}
