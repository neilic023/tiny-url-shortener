import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsNumber } from 'class-validator';

@Schema()
export class AnalyticsDoc extends Document {
  @Prop()
  @IsString()
  url: string;

  @Prop()
  @IsString()
  shortUrl: string;

  @Prop()
  @IsString()
  domain: string;

  @Prop()
  @IsNumber()
  redirects: number;

  @Prop()
  createdAt: string;
}

export const AnalyticsSchema = SchemaFactory.createForClass(AnalyticsDoc);
