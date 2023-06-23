import { Module } from '@nestjs/common';
import { ProviderModule } from '../provider/provider.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(), ProviderModule],
})
export class AppModule {}
