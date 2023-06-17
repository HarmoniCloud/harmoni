import { Provider } from '../provider';
import { Provider as ProviderEnum } from '@harmoni/types';

export class AwsProvider extends Provider {
  constructor() {
    super(ProviderEnum.AWS);
  }
}
