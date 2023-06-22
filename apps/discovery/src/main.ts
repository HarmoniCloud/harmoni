import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { AppConfigService } from './config/config.service';
import { logger } from '@harmoni/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<AppConfigService>(AppConfigService).getConfig().app;

  await app.listen(config.port);

  logger.info(`🚀 Discovery service is up and running on port ${config.port}`);
}

bootstrap();
