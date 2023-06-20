import { Provider } from '../provider';
import { Provider as ProviderEnum } from '@harmoni/types';
import { DefaultAzureCredential } from '@azure/identity';
import { ResourceManagementClient } from '@azure/arm-resources';

export class AzureProvider extends Provider {
  private readonly credential: DefaultAzureCredential;

  constructor() {
    super(ProviderEnum.AZURE);

    // TODO: Need to get AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET from env
    // Waiting for @slagter to create an Azure AD app for this purpose
    this.credential = new DefaultAzureCredential();
  }

  async getResources(subscriptionId: string) {
    const client = new ResourceManagementClient(this.credential, subscriptionId);
    const resources = client.resources.list();
    return resources;
  }
}
