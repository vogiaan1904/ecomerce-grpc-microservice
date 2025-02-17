import { Transform } from 'class-transformer';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import {
  LoginRequest,
  RegisterRequest,
  ValidateRequest,
} from '../proto-buffers/auth.pb';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export class LoginRequestDto implements LoginRequest {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class RegisterRequestDto implements RegisterRequest {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  @Transform(({ value }) => value.toUpperCase())
  gender: string;
}

export class ValidateRequestDto implements ValidateRequest {
  @IsNotEmpty()
  @IsString()
  token: string;
}
