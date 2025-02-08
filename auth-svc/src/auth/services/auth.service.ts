import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from '../auth.entity';
import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { RegisterRequestDto } from '../auth.dto';
import { RegisterResponse } from '../auth.pb';

export class AuthService {
  @InjectRepository(Auth)
  private readonly authRepository: Repository<Auth>;

  @Inject(JwtService)
  private readonly jwtService: JwtService;

  async register(dto: RegisterRequestDto): Promise<RegisterResponse> {}
}
