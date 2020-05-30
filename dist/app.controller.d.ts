import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { PhotoService } from "./photo/photo.service";
import { Photo } from './photo/photo.entity';
export declare class AppController {
    private readonly appService;
    private readonly authService;
    private readonly photoService;
    constructor(appService: AppService, authService: AuthService, photoService: PhotoService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
    getHello(): string;
    getName(): string;
    getPhoto(): Promise<Photo[]>;
}
