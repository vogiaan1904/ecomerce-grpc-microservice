import { Injectable } from '@nestjs/common';
import { Auth } from '../auth.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService as Jwt } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class JwtService {
  @InjectRepository(Auth)
  private readonly authRepository: Repository<Auth>;
  private readonly jwtService: Jwt;

  constructor(jwtService: Jwt) {
    this.jwtService = jwtService;
  }

  async decode(token: string): Promise<any> {
    return this.jwtService.decode(token);
  }

  async validateUser(decoded: any): Promise<Auth> {
    return this.authRepository.findOneOrFail(decoded.id);
  }

  generateToken(user: Auth): string {
    return this.jwtService.sign({ id: user.id, email: user.email });
  }

  isCorrectPassword(password: string, userPassword: string): boolean {
    return bcrypt.compareSync(password, userPassword);
  }

  encodePassword(password: string): string {
    const salt: string = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  async verifyToken(token: string): Promise<boolean> {
    try {
      this.jwtService.verify(token);
      return true;
    } catch (error) {
      return false;
    }
  }
}
