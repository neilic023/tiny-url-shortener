import { IsNotEmpty, IsString } from 'class-validator';

export class UrlDto {
  @IsString()
  @IsNotEmpty()
  longUrl: string;
}
