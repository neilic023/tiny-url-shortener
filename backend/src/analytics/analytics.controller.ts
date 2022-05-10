import { Body, Controller, Post, Get } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsDto } from './dtos';

@Controller('analytics')
export class AnalyticsController {
  constructor(private analyticsService: AnalyticsService) {}

  @Post()
  async createAnalytic(@Body() analyticsObj: AnalyticsDto) {
    await this.analyticsService.createAnalytics(analyticsObj);
  }

  @Get('/domains')
  async getAnalytics() {
    const response = await this.analyticsService.getAnalytics();
    return response;
  }
}
