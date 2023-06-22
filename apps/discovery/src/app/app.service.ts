import { Injectable, OnModuleInit } from '@nestjs/common';
import { AzureService } from './providers/azure.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly azureService: AzureService) {}

  async onModuleInit() {
    // This is just a test to see if the Azure SDK is working
    // Seems like we are getting an error when trying to use the SDK - not authorized or something
    // Need to investigate further about authentication with the SDK
    const resources = await this.azureService.getResources('d94fe338-52d8-4a44-acd4-4f8301adf2cf');
    console.log(resources);
  }

  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
