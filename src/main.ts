import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as dotenv from 'dotenv';
import * as express from 'express';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: true,
    }),
  );

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use('/images', express.static('src/images'));

  const PORT = process.env.PORT || 4000;
  const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true,
  };
  app.enableCors(corsOptions);
  await app.listen(PORT);
  console.log('app listening on port', PORT);
}
bootstrap();
