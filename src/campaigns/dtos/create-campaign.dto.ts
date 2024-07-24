import { IsNotEmpty, IsString, IsDateString, IsArray, ValidateNested, ArrayMinSize, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { CampaignType } from '../enums/campaign.enums';

class ScheduleDto {
  @IsString()
  @IsNotEmpty()
  day: string;

  @IsString()
  @IsNotEmpty()
  startTime: string;

  @IsString()
  @IsNotEmpty()
  endTime: string;
}

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(CampaignType)
  @IsNotEmpty()
  type: CampaignType;

  @IsDateString()
  @IsNotEmpty()
  startDate: Date;

  @IsDateString()
  @IsNotEmpty()
  endDate: Date;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ScheduleDto)
  @ArrayMinSize(1)
  schedule: ScheduleDto[];
}
