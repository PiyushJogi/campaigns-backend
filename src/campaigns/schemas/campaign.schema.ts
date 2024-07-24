import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CampaignType } from '../enums/campaign.enums';

export type CampaignDocument = Campaign & Document;

@Schema()
export class Campaign {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: CampaignType })
  type: CampaignType;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop([{ day: { type: String, required: true }, startTime: { type: String, required: true }, endTime: { type: String, required: true } }])
  schedule: { day: string; startTime: string; endTime: string }[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
