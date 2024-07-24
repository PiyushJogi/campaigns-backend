import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Campaign } from './interfaces/campaign.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CampaignDocument } from './schemas/campaign.schema';
import { CreateCampaignDto } from './dtos/create-campaign.dto';
import { UpdateCampaignDto } from './dtos/update-campaign.dto';

@Injectable()
export class CampaignsService {
  constructor(@InjectModel('Campaign') private campaignModel: Model<CampaignDocument>) {}

  async findAll(): Promise<Campaign[]> {
    try {
      return this.campaignModel.find().exec();
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch campaigns');
    }
  }

  async findOne(id: ObjectId): Promise<Campaign> {
    try {
      const campaign = await this.campaignModel.findById(id).exec();
      if (!campaign) {
        throw new NotFoundException(`Campaign with ID ${id} not found`);
      }
      return campaign;
    } catch (error) {
      throw new NotFoundException(`Failed to fetch campaign with ID ${id}`);
    }
  }

  async create(createCampaignDto: CreateCampaignDto): Promise<Campaign> {
    try{
      const createdCampaign = new this.campaignModel(createCampaignDto);
      return createdCampaign.save();
    } catch (error) {
      throw new InternalServerErrorException(`Failed to create campaign`);
    }  
  }

  async update(id: ObjectId, updateCampaignDto: UpdateCampaignDto): Promise<Campaign> {
    try {
      const updatedCampaign = await this.campaignModel.findByIdAndUpdate(id, updateCampaignDto, { new: true }).exec();
      if (!updatedCampaign) {
        throw new NotFoundException(`Campaign with ID ${id} not found`);
      }
      return updatedCampaign;
    } catch (error) {
      throw new InternalServerErrorException(`Failed to update campaign with ID ${id}`);
    }
  }

  async remove(id: ObjectId): Promise<Campaign> {
    try {
      const removedCampaign = await this.campaignModel.findByIdAndDelete(id).exec();
      if (!removedCampaign) {
        throw new NotFoundException(`Campaign with ID ${id} not found`);
      }
      return removedCampaign;
    } catch (error) {
      throw new InternalServerErrorException(`Failed to delete campaign with ID ${id}`);
    }
  }
}
