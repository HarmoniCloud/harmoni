import { ConfigFactory } from '@nestjs/config';

export const configFactory: ConfigFactory<{ config: Configuration }> = () => {
  return {
    config: {
      app: {
        port: +process.env.APP_PORT || 3000,
        env: process.env.NODE_ENV || 'development',
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

export interface AzureConfig {
  clientId: string;
  clientSecret: string;
  tenantId: string;
  subscriptionId: string;
}

export interface Configuration {
  app: AppConfig;
  azure: AzureConfig;
}
