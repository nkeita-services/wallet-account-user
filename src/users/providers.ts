import { Connection } from 'mongoose';
import { UsersSchema } from './model';

export const usersProviders = [
  {
    provide: 'UserModelToken',
    useFactory: (connection: Connection) => connection.model('User', UsersSchema),
    inject: ['DbConnectionToken'],
  },
];
