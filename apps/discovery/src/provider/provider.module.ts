import { Module } from '@nestjs/common';
import { AzureService } from './azure/azure.service';

@Module({
  imports: [],
  providers: [AzureService],
})
export class ProviderModule {}
