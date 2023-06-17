import { Provider } from '../provider';
import { Provider as ProviderEnum } from '@harmoni/types';

export class AzureProvider extends Provider {
  constructor() {
    super(ProviderEnum.AZURE);
  }
}
