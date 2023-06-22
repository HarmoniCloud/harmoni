import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { AppLoggerSerivce } from './logger/logger.service';
import { AppConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get<AppLoggerSerivce>(AppLoggerSerivce);
  const config = app.get<AppConfigService>(AppConfigService).getConfig().app;

  await app.listen(config.port);

  logger.log(`🚀 Discovery service is up and running on port ${config.port}`);
}

bootstrap();
