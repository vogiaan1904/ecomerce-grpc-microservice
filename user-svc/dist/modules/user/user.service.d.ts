import { UpdateUserProfileDto } from './dto';
import { CreateUserRequestDto } from './dto/create-user.request.dto';
import { CreateUserResponse, FindAllRequest, FindAllResponse, FindOneResponse, UpdateUserResponse } from './user.pb';
import { FindUserByEmailRequestDto, FindUserByIdRequestDto } from './dto/find-one-user.request.dto';
export declare class UserService {
    private readonly repository;
    create(dto: CreateUserRequestDto): Promise<CreateUserResponse>;
    findById({ id }: FindUserByIdRequestDto): Promise<FindOneResponse>;
    findByEmail({ email, }: FindUserByEmailRequestDto): Promise<FindOneResponse>;
    findAll(dto: FindAllRequest): Promise<FindAllResponse>;
    updateProfile({ id, ...data }: UpdateUserProfileDto): Promise<UpdateUserResponse>;
}
