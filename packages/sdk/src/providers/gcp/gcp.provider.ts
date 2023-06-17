import { Provider } from '../provider';
import { Provider as ProviderEnum } from '@harmoni/types';

export class GcpProvider extends Provider {
  constructor() {
    super(ProviderEnum.GCP);
  }
}
