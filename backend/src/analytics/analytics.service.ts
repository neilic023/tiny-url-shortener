import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnalyticsDoc } from './schema/analytics.schema';
import { AnalyticsDto } from './dtos';

@Injectable()
export class AnalyticsService {
  constructor(@InjectModel(AnalyticsDoc.name) private analyticsModel: Model<AnalyticsDoc>) {}

  async createAnalytics(analyticsObj: AnalyticsDto) {
    const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim;
    const domain = analyticsObj.longUrl.match(regex).toString();
    const findDomains = await this.analyticsModel.findOne({ domain: domain });

    if (findDomains === null) {
      const newAnalytic = new this.analyticsModel({
        longUrl: analyticsObj.longUrl,
        domain: domain,
        redirects: 1,
      });
      await newAnalytic.save();
    } else {
      findDomains.redirects += 1;
      await findDomains.save();
    }
  }

  async getAnalytics() {
    const timeInterval = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const getAnalyticsFromDb = await this.analyticsModel
      .find({
        updatedAt: { $gt: timeInterval },
      })
      .sort({ redirects: -1 });

    return getAnalyticsFromDb;
  }
}
