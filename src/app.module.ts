import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampaignsModule } from './campaigns/campaigns.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule,CampaignsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
