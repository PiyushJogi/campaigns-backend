import { CampaignType } from "../enums/campaign.enums";

export interface Schedule {
  day: string;
  startTime: string;
  endTime: string;
}

export interface Campaign {
  name: string;  
  type: CampaignType;
  startDate: Date;
  endDate: Date;
  schedule: Schedule[];
  createdAt?: Date;
  updatedAt?: Date;
}
