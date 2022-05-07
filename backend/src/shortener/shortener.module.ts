import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlShortenerController } from './shortener.controller';
import { UrlShortenerService } from './shortener.service';
import { UrlDoc, UrlShortenerSchema } from './schema/urlShortener.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UrlDoc.name,
        schema: UrlShortenerSchema,
      },
    ]),
  ],
  controllers: [UrlShortenerController],
  providers: [UrlShortenerService],
  exports: [UrlShortenerService],
})
export class UrlShortenerModule {}
