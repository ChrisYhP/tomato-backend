import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, resolve, join } from 'path';
import { LangService } from './lang.service';

@Controller('android')
export class LangController {
  constructor(private readonly langService: LangService) {}

  @Post('uploadfile')
  @UseInterceptors(
    FileInterceptor('files', {
      storage: diskStorage({
        destination: './uploads/',
        filename: (req, file, cb) => {
          console.log(file)
          cb(null, `${Date.now()}.${file.originalname}`)
        }
      })
    })
  )
  uploadFile(@UploadedFile() files,) {
    const filePath = `${files.destination}${files.filename}`
    console.log('file', filePath)
    return {
      ...files,
      src: join(__dirname, filePath)
    };
  }
}
 