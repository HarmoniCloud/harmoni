import { Provider } from '../provider';
import { Provider as ProviderEnum } from '@harmoni/types';

export class AwsProvider extends Provider {
  constructor() {
    super(ProviderEnum.AWS);
  }

  override init(): void | Promise<void> {
    throw new Error('Method not implemented.');
  }
}
