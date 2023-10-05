import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!bcrypt.compare(pass, user?.password)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.nickname };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
