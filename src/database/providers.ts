
import * as mongoose from 'mongoose';
import * as config from 'config';
import { Logger } from '@nestjs/common';

const logger: Logger = new Logger('DatabaseModule');
export const databaseProviders = [
  {
    provide: 'MongodbConnection',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        config.get('mongoUri'), {useUnifiedTopology: true}
      ),
  },
];
