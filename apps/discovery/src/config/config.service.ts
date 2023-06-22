import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration } from './config.factory';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  getConfig(): Configuration {
    const config = this.configService.get<Configuration>('config');
    if (!config) {
      throw new Error('Config not found. Did you forget to add a .env file?');
    }
    return config;
  }
}
