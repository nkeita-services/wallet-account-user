import { Module } from '@nestjs/common';
import { UsersController } from './controller';
import { UsersService } from './service';
import { AuthModule } from './../auth/module';
import { DatabaseModule } from '../database/module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
