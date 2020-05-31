import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}

export class LoginUserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly password: string;
}