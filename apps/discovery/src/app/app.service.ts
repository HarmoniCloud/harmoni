import { Injectable, OnModuleInit } from '@nestjs/common';
import { AzureService } from './providers/azure.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly azureService: AzureService) {}

  async onModuleInit() {
    const resources = await this.azureService.getResources('d94fe338-52d8-4a44-acd4-4f8301adf2cf');
    console.log(resources);
  }

  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
