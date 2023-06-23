import { ClientSecretCredential } from '@azure/identity';
import { AzureVirtualMachine } from '../models/virtual-machine';
import { ComputeManagementClient } from '@azure/arm-compute';

export class AzureComputeService {
  constructor(private readonly credential: ClientSecretCredential) {}

  async getAllVirtualMachines(subscriptionId: string): Promise<AzureVirtualMachine[]> {
    // TODO: Check how we can reuse the connection to the client. pay attention we might need to change subscriptionId dynamically
    const client = new ComputeManagementClient(this.credential, subscriptionId);

    const result: AzureVirtualMachine[] = [];
    for await (const item of client.virtualMachines.listAll()) {
      const azureVM: AzureVirtualMachine = {
        id: item.id,
        name: item.name,
        location: item.location,
        createdAt: item.timeCreated,
        os: {
          type: item.storageProfile?.osDisk?.osType,
        },
        diskSizeGB: item.storageProfile?.osDisk?.diskSizeGB,
        tags: item.tags,
        vmSize: item.hardwareProfile?.vmSize,
        vmSizeProperties: item.hardwareProfile?.vmSizeProperties,
        imagePublisher: item.storageProfile?.imageReference?.publisher,
        imageOffer: item.storageProfile?.imageReference?.offer,
        imageSku: item.storageProfile?.imageReference?.sku,
        imageVersion: item.storageProfile?.imageReference?.version,
        provisioningState: item.provisioningState,
      };

      result.push(azureVM);
    }

    return result;
  }
}
