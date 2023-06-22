import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from '../config/config.module';
import { AppLoggerModule } from '../logger/logger.module';
import { AzureService } from './providers/azure.service';

@Module({
  imports: [AppConfigModule, AppLoggerModule],
  controllers: [AppController],
  providers: [AppService, AzureService],
})
export class AppModule {}
