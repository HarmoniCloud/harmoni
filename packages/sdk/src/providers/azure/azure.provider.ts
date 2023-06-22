import { Provider } from '../provider';
import { Provider as ProviderEnum } from '@harmoni/types';
import { ClientSecretCredential, ClientSecretCredentialOptions } from '@azure/identity';
import { logger } from '@harmoni/logger';
import { ComputeManagementClient } from '@azure/arm-compute';

export class AzureProvider extends Provider {
  private readonly credential: ClientSecretCredential;

  constructor(providerOptions: AzureProviderOptions) {
    super(ProviderEnum.AZURE);

    const { tenantId, clientId, clientSecret, options } = providerOptions;
    this.credential = new ClientSecretCredential(tenantId, clientId, clientSecret, options);
  }

  async getResources(subscriptionId: string) {
    logger.info(`Getting resources for subscription ${subscriptionId}`);
    const client = new ComputeManagementClient(this.credential, subscriptionId);

    const result = [];
    for await (const item of client.virtualMachines.listAll()) {
      result.push(item);
    }

    return result;
  }
}

interface AzureProviderOptions {
  tenantId: string;
  clientId: string;
  clientSecret: string;
  options?: ClientSecretCredentialOptions;
}
