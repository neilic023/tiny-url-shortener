import { Body, Controller, Post, Get, Param, Redirect } from '@nestjs/common';
import { UrlShortenerService } from '../shortener/shortener.service';
import { UrlDto } from './dto/url.dto';

@Controller()
export class UrlShortenerController {
  constructor(private shortenerService: UrlShortenerService) {}

  @Post()
  async createShortUrl(@Body() urlObj: UrlDto) {
    const response = await this.shortenerService.createShortUrl(urlObj);
    return response;
  }

  @Get('/:code')
  @Redirect()
  async redirectUrl(@Param('code') code: string) {
    const response = await this.shortenerService.redirectUrl(code);
    return { url: response };
  }
}
