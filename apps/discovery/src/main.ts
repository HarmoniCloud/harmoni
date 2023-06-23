import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { logger } from '@harmoni/logger';
import { config } from '@harmoni/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = config.discovery.port;

  await app.listen(port);

  logger.info(`🚀 Discovery service is up and running on port ${port}`);
}

bootstrap();
