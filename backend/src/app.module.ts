import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlShortenerModule } from './shortener/shortener.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.dev.env',
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UrlShortenerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
