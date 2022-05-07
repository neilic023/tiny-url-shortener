import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as shortid from 'shortid';
import * as validUrl from 'valid-url';
import { Model } from 'mongoose';
import { UrlDoc } from './schema/urlShortener.schema';
import { UrlDto } from './dto/url.dto';
import { Url } from './entites/url.entity';

@Injectable()
export class UrlShortenerService {
  constructor(@InjectModel(UrlDoc.name) private urlModel: Model<UrlDoc>) {}

  private async validateUrl(urlObj: UrlDto): Promise<UrlDto> {
    if (validUrl.isUri(urlObj.longUrl)) {
      return urlObj;
    }
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: 'Url is not valid',
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  async createShortUrl(urlObj: UrlDto): Promise<Url> {
    const validate = await this.validateUrl(urlObj);

    if (validate) {
      const findUrl = await this.urlModel.findOne({ longUrl: urlObj.longUrl });
      if (findUrl) return findUrl;
    }

    const urlCode = shortid.generate();
    const shortUrl: string = process.env.BASE_URL + '/' + urlCode;
    const newUrl = new this.urlModel({
      urlCode: urlCode,
      longUrl: urlObj.longUrl,
      shortUrl: shortUrl,
      createdAt: new Date().toISOString(),
    });
    const result = await newUrl.save();
    return result;
  }

  async redirectUrl(code: string): Promise<string> {
    const urlToFind = await this.urlModel.findOne({ urlCode: code });
    return urlToFind.longUrl;
  }
}
