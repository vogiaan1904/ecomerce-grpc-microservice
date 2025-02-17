import {
  ArgumentsHost,
  Catch,
  Controller,
  Inject,
  RpcExceptionFilter,
  UseFilters,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import {
  AUTH_SERVICE_NAME,
  LoginResponse,
  RegisterResponse,
} from './proto-buffers/auth.pb';
import { LoginRequestDto, RegisterRequestDto } from './dto/auth-request.dto';
import { throwError } from 'rxjs';

@Catch(RpcException)
export class GrpcExceptionFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException, host: ArgumentsHost): any {
    return throwError(() => exception.getError());
  }
}

@UseFilters(new GrpcExceptionFilter())
@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @GrpcMethod(AUTH_SERVICE_NAME, 'Register')
  private async register(dto: RegisterRequestDto): Promise<RegisterResponse> {
    return this.authService.register(dto);
  }

  @GrpcMethod(AUTH_SERVICE_NAME, 'Login')
  private async login(dto: LoginRequestDto): Promise<LoginResponse> {
    return this.authService.login(dto);
  }

  @GrpcMethod(AUTH_SERVICE_NAME, 'Validate')
  private async validate(token: string): Promise<any> {}
}
