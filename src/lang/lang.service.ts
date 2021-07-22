import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class LangService {
  constructor(private httpService: HttpService) {}
  // async getLang() {
  //   const langs = await this.httpService.get('https://cn.alicdn.com/upload/pack/65/lang.js', {
  //     responseType: 'blob'
  //   });
  //   return langs;
  // }
}
