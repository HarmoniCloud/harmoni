import { BaseVirtualMachine } from '../../../models';

export interface AzureVirtualMachine extends BaseVirtualMachine {
  tags?: { [key: string]: string };
  vmSize?: string;
  vmSizeProperties?: VmSizeProperties;
  imagePublisher?: string;
  imageOffer?: string;
  imageSku?: string;
  imageVersion?: string;
  provisioningState?: string;
}

interface VmSizeProperties {
  /** Specifies the number of vCPUs available for the VM. When this property is not specified in the request body the default behavior is to set it to the value of vCPUs available for that VM size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list). */
  vCPUsAvailable?: number;
  /** Specifies the vCPU to physical core ratio. When this property is not specified in the request body the default behavior is set to the value of vCPUsPerCore for the VM Size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list). **Setting this property to 1 also means that hyper-threading is disabled.** */
  vCPUsPerCore?: number;
}
