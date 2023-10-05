import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() user: SignInDto) {
    return this.authService.signIn(user.nickname, user.password);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
