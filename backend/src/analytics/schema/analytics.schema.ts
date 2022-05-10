import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsNumber } from 'class-validator';

@Schema({ timestamps: true })
export class AnalyticsDoc extends Document {
  @Prop()
  @IsString()
  longUrl: string;

  // @Prop()
  // @IsString()
  // shortUrl: string;

  @Prop({ unique: true })
  @IsString()
  domain: string;

  @Prop()
  @IsNumber()
  redirects: number;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const AnalyticsSchema = SchemaFactory.createForClass(AnalyticsDoc);
