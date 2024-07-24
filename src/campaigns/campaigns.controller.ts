import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { Campaign } from './interfaces/campaign.interface';
import { ObjectId } from 'mongoose';
import { CreateCampaignDto } from './dtos/create-campaign.dto';
import { UpdateCampaignDto } from './dtos/update-campaign.dto';

@Controller('campaigns')
@UsePipes(new ValidationPipe())
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Get()
  findAll(): Promise<Campaign[]> {
    return this.campaignsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId): Promise<Campaign> {
    return this.campaignsService.findOne(id);
  }

  @Post('create')
  create(@Body() createCampaignDto: CreateCampaignDto): Promise<Campaign> {
    return this.campaignsService.create(createCampaignDto);
  }

  @Patch('update/:id')
  update(@Param('id') id: ObjectId, @Body() updateCampaignDto: UpdateCampaignDto): Promise<Campaign> {
    return this.campaignsService.update(id, updateCampaignDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: ObjectId): Promise<Campaign> {
    return this.campaignsService.remove(id);
  }

}
