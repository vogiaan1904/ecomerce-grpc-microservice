import { HttpStatus, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from './interfaces/user.interface';
import { FindOneResponse } from './user.pb';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly repository: UserRepositoryInterface;

  async findById(id: string): Promise<FindOneResponse> {
    const user: User = await this.repository.findById(id);
    return { status: HttpStatus.OK, error: null, data: user };
  }
}
