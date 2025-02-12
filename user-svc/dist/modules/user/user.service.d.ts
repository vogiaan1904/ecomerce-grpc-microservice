import { UpdateUserProfileDto } from './dto';
import { CreateUserRequestDto } from './dto/create-user.request.dto';
import { FindOneUserRequestDto } from './dto/find-one-user.request.dto';
import { CreateUserResponse, FindAllRequest, FindAllResponse, FindOneResponse, UpdateUserResponse } from './user.pb';
export declare class UserService {
    private readonly repository;
    create(dto: CreateUserRequestDto): Promise<CreateUserResponse>;
    findById({ id }: FindOneUserRequestDto): Promise<FindOneResponse>;
    findAll(dto: FindAllRequest): Promise<FindAllResponse>;
    updateProfile({ id, ...data }: UpdateUserProfileDto): Promise<UpdateUserResponse>;
}
