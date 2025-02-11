import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_SERVICE_NAME } from './user.pb';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50052',
          package: USER_SERVICE_NAME,
          protoPath: 'node_modules/grpc-nest-proto/proto/user.proto',
        },
      },
    ]),
  ],
  controllers: [UserController],
})
export class UserModule {}
