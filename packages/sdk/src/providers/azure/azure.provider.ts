import { Provider } from '../provider';
import { Provider as ProviderEnum } from '@harmoni/types';
import { ClientSecretCredential, ClientSecretCredentialOptions } from '@azure/identity';
import { ResourceManagementClient } from '@azure/arm-resources';
import { logger } from '@harmoni/logger';

export class AzureProvider extends Provider {
  private readonly credential: ClientSecretCredential;

  constructor(providerOptions: AzureProviderOptions) {
    super(ProviderEnum.AZURE);

    const { tenantId, clientId, clientSecret, options } = providerOptions;
    this.credential = new ClientSecretCredential(tenantId, clientId, clientSecret, options);
  }

  async getResources(subscriptionId: string) {
    try {
      const client = new ResourceManagementClient(this.credential, subscriptionId);
      const resArray = [];
      for await (const item of client.providers.list()) {
        resArray.push(item);
      }
      return resArray;
    } catch (err: any) {
      logger.error(err);
      return [];
    }
  }
}

interface AzureProviderOptions {
  tenantId: string;
  clientId: string;
  clientSecret: string;
  options?: ClientSecretCredentialOptions;
}
