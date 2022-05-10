import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';
import { AnalyticsDoc, AnalyticsSchema } from './schema/analytics.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AnalyticsDoc.name,
        schema: AnalyticsSchema,
      },
    ]),
  ],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}
