import { Injectable } from '@nestjs/common';
import { AzureProvider } from '@harmoni/sdk';
import { AppConfigService } from '../../config/config.service';

@Injectable()
export class AzureService {
  private client: AzureProvider;

  constructor(private readonly config: AppConfigService) {
    const azureConfig = this.config.getConfig().azure;
    this.client = new AzureProvider({ ...azureConfig });
  }

  async getResources(subscriptionId: string) {
    return this.client.getResources(subscriptionId);
  }
}
