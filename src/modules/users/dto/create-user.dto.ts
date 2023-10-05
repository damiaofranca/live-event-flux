import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @MinLength(3)
  @IsNotEmpty()
  nickname: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsStrongPassword({
    minLength: 8,
    minNumbers: 1,
    minLowercase: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  password: string;
  @IsOptional()
  stripeCustomerId: string;
}
