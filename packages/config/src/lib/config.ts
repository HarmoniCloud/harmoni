import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' });

export const config: Config = {
  logger: {
    console: {
      threshold: process.env.LOGGER_CONSOLE_THRESHOLD || 'info',
    },
  },
  discovery: {
    port: +process.env.DISCOVERY_SERVICE_PORT,
    azure: {
      tenantId: process.env.AZURE_TENANT_ID,
      clientId: process.env.AZURE_CLIENT_ID,
      clientSecret: process.env.AZURE_CLIENT_SECRET,
      subscriptionId: process.env.AZURE_SUBSCRIPTION_ID,
      intervals: {
        discoverIntervalMs: +process.env.AZURE_DISCOVER_INTERVAL_MS,
      },
    },
  },
};

interface LoggerConfig {
  console: {
    threshold: string;
  };
}

interface DiscoveryConfig {
  port: number;
  azure: {
    tenantId: string;
    clientId: string;
    clientSecret: string;
    subscriptionId: string;
    intervals: {
      discoverIntervalMs: number;
    };
  };
}

interface Config {
  logger: LoggerConfig;
  discovery: DiscoveryConfig;
}
