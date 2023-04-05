import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const config = new DocumentBuilder()
    .setTitle('App APIs')
    // .setDescription('App APIs List')
    .setVersion('1.0')
    .build();

  // app.setGlobalPrefix('api');

  const document = SwaggerModule.createDocument(app, config);

  const options = {
    jsonDocumentUrl: 'api-json',
    yamlDocumentUrl: 'api-yaml',
  };

  SwaggerModule.setup('', app, document, options);

  await app.listen(3000);
}
bootstrap();
