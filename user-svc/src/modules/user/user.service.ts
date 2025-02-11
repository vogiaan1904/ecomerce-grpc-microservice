import { HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { UpdateUserProfileDto } from './dto';
import { CreateUserRequestDto } from './dto/create-user.request.dto';
import { FindOneUserRequestDto } from './dto/find-one-user.request.dto';
import { UsersRepository } from './repositories/base/user.repo';
import {
  CreateUserResponse,
  FindAllRequest,
  FindAllResponse,
  FindOneResponse,
  UpdateUserResponse,
} from './user.pb';

@Injectable()
export class UserService {
  private readonly repository: UsersRepository;

  async create(dto: CreateUserRequestDto): Promise<CreateUserResponse> {
    const user: User = await this.repository.create(dto);
    return { status: HttpStatus.CREATED, error: null, id: user.id };
  }

  async findById({ id }: FindOneUserRequestDto): Promise<FindOneResponse> {
    const user: User = await this.repository.findById(id);
    return { status: HttpStatus.OK, error: null, data: user };
  }

  async findAll(dto: FindAllRequest): Promise<FindAllResponse> {
    const { page, limit } = dto;
    try {
      const users = await this.repository.findAllWithPagination(
        {},
        {
          page,
          limit,
          populate: [],
          sort: { created_at: -1 },
        },
      );
      return {
        status: HttpStatus.OK,
        error: null,
        data: users.docs,
        total: users.totalDocs,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: [error.message],
        data: [],
        total: 0,
      };
    }
  }

  async updateProfile({
    id,
    ...data
  }: UpdateUserProfileDto): Promise<UpdateUserResponse> {
    const user: User = await this.repository.findById(id);

    if (!user) {
      return { status: HttpStatus.NOT_FOUND, error: ['User not found'] };
    }
    try {
      await this.repository.update(id, data);
      return { status: HttpStatus.OK, error: null };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: [error.message],
      };
    }
  }
}
