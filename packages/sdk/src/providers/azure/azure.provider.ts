import { Provider } from '../provider';
import { Provider as ProviderEnum } from '@harmoni/types';
import { ClientSecretCredential, ClientSecretCredentialOptions } from '@azure/identity';
import { ComputeManagementClient } from '@azure/arm-compute';
import { AzureVirtualMachine } from './models/virtual-machine';
import { AzureComputeService } from './services/compute.service';

export class AzureProvider extends Provider {
  private credential!: ClientSecretCredential;
  private azureComputeService!: AzureComputeService;

  constructor(private readonly providerOptions: AzureProviderOptions) {
    super(ProviderEnum.AZURE);
    this.init();
  }

  init(): void | Promise<void> {
    const { tenantId, clientId, clientSecret, options } = this.providerOptions;
    this.credential = new ClientSecretCredential(tenantId, clientId, clientSecret, options);

    this.azureComputeService = new AzureComputeService(this.credential);
  }

  getAllVms(subscriptionId: string): Promise<AzureVirtualMachine[]> {
    return this.azureComputeService.getAllVirtualMachines(subscriptionId);
  }
}

interface AzureProviderOptions {
  tenantId: string;
  clientId: string;
  clientSecret: string;
  options?: ClientSecretCredentialOptions;
}
