import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/module';
import { DatabaseModule } from './database/module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as config from 'config';
import { AuthModule } from './auth/module';

@Module({
  imports: [ UsersModule, DatabaseModule, AuthModule],
})

export class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Wallet Account User Service')
  .setDescription('The users API description')
  .setVersion('1.0.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/v1', app, document);

  const port = config.get('port');
  await app.listen(String(port));
}
bootstrap();
