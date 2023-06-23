import { Injectable } from '@nestjs/common';
import { Provider } from '@harmoni/types';
import { logger } from '@harmoni/logger';

@Injectable()
export abstract class ProviderService {
  constructor(private readonly name: Provider) {}

  getName(): string {
    return this.name;
  }

  async discoverInterval() {
    logger.info(`🔍 Starting discovery for ${this.name} provider`);

    const startTime = performance.now();
    await this.discover();
    const endTime = performance.now();

    logger.info(`Finished discovery for ${this.name} provider, took ${(endTime - startTime).toFixed(2)}ms`);
  }

  abstract init(): void | Promise<void>;
  abstract discover(): void | Promise<void>;
}
