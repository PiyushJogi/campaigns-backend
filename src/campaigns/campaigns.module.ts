import { Module } from '@nestjs/common';
import { CampaignsController } from './campaigns.controller';
import { CampaignsService } from './campaigns.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignSchema } from './schemas/campaign.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Campaign', schema: CampaignSchema }])],
  controllers: [CampaignsController],
  providers: [CampaignsService]
})
export class CampaignsModule {}
