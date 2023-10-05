import { IsNotEmpty, IsStrongPassword, MinLength } from 'class-validator';

export class SignInDto {
  @MinLength(3)
  @IsNotEmpty()
  nickname: string;
  @IsStrongPassword({
    minLength: 8,
    minNumbers: 1,
    minLowercase: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  password: string;
}
