import { Injectable } from '@nestjs/common';
import { AzureProvider } from '@harmoni/sdk';
import { config } from '@harmoni/config';
import { ProviderService } from '../provider.service';
import { Provider } from '@harmoni/types';
import { SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class AzureService extends ProviderService {
  private client: AzureProvider;

  constructor(private readonly schedulerRegistry: SchedulerRegistry) {
    super(Provider.AZURE);
    this.init();
  }

  init(): void | Promise<void> {
    const azureConfig = config.discovery.azure;
    this.client = new AzureProvider({ ...azureConfig });

    // Register discovery interval for Azure
    this.schedulerRegistry.addInterval(
      `${Provider.AZURE}-discovery`,
      setInterval(super.discoverInterval.bind(this), azureConfig.intervals.discoverIntervalMs)
    );
  }

  async discover(): Promise<void> {
    await this.getResources('d94fe338-52d8-4a44-acd4-4f8301adf2cf');
  }

  private async getResources(subscriptionId: string) {
    return this.client.getAllVms(subscriptionId);
  }
}
