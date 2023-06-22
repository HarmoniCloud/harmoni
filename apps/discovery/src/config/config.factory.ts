import { ConfigFactory } from '@nestjs/config';
import { LOG_LEVEL } from '@origranot/ts-logger';

export const configFactory: ConfigFactory<{ config: Configuration }> = () => {
  return {
    config: {
      app: {
        port: +process.env.APP_PORT || 3000,
        env: process.env.NODE_ENV || 'development',
      },
      logger: {
        console: {
          threshold: LOG_LEVEL[process.env.LOGGER_CONSOLE_THRESHOLD] || LOG_LEVEL.INFO,
        },
      },
      azure: {
        clientId: process.env.AZURE_CLIENT_ID,
        clientSecret: process.env.AZURE_CLIENT_SECRET,
        tenantId: process.env.AZURE_TENANT_ID,
        subscriptionId: process.env.AZURE_SUBSCRIPTION_ID,
      },
    },
  };
};

export interface AppConfig {
  port: number;
  env: string;
}

export interface LoggerConfig {
  console: {
    threshold: LOG_LEVEL;
  };
}

export interface AzureConfig {
  clientId: string;
  clientSecret: string;
  tenantId: string;
  subscriptionId: string;
}

export interface Configuration {
  app: AppConfig;
  logger: LoggerConfig;
  azure: AzureConfig;
}
