import { Provider } from '../provider';
import { Provider as ProviderEnum } from '@harmoni/types';

export class GcpProvider extends Provider {
  constructor() {
    super(ProviderEnum.GCP);
  }

  override init(): void | Promise<void> {
    throw new Error('Method not implemented.');
  }
}
