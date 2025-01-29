import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import helmet from 'helmet';

function createSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Pallets API')
    .addBearerAuth()
    .setDescription('Definição das Rotas da Pallets API')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  createSwagger(app);

  app.use(helmet);
  await app.listen(3000);
}
bootstrap();
