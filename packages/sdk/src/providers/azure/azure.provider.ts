import { Provider } from '../provider';
import { Provider as ProviderEnum } from '@harmoni/types';
import { DefaultAzureCredential } from '@azure/identity';
import { ResourceManagementClient } from '@azure/arm-resources';

export class AzureProvider extends Provider {
  private readonly credential: DefaultAzureCredential;

  constructor() {
    super(ProviderEnum.AZURE);
    this.credential = new DefaultAzureCredential();
  }

  async getResources(subscriptionId: string) {
    const client = new ResourceManagementClient(this.credential, subscriptionId);
    const resArray = [];
    for await (const item of client.providers.list()) {
      resArray.push(item);
    }
    return resArray;
  }
}
