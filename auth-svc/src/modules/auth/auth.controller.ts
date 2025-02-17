import { Controller, Inject } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GrpcMethod } from '@nestjs/microservices';
import { AUTH_SERVICE_NAME, RegisterResponse } from './proto-buffers/auth.pb';
import { RegisterRequestDto } from './dto/auth-request.dto';

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @GrpcMethod(AUTH_SERVICE_NAME, 'Register')
  private async register(dto: RegisterRequestDto): Promise<RegisterResponse> {
    return this.authService.register(dto);
  }

  @GrpcMethod(AUTH_SERVICE_NAME, 'Validate')
  async validate(token: string): Promise<any> {}
}
