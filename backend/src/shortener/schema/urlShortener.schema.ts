import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UrlDoc extends Document {
  @Prop({ required: true, unique: true })
  longUrl: string;

  @Prop()
  shortUrl: string;

  @Prop()
  urlCode: string;

  @Prop()
  createdAt: string;
}

export const UrlShortenerSchema = SchemaFactory.createForClass(UrlDoc);
