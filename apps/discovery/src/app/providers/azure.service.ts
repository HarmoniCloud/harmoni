import { Injectable } from '@nestjs/common';
import { AzureProvider } from '@harmoni/sdk';

@Injectable()
export class AzureService {
  private client: AzureProvider;

  constructor() {
    this.client = new AzureProvider();
  }

  async getResources(subscriptionId: string) {
    return this.client.getResources(subscriptionId);
  }
}
