import { UsersSchema } from './../users/model';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import * as config from 'config';

@Module({
  imports: [
    MongooseModule.forRoot(config.get('mongoUri'), { useNewUrlParser: true }),
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
