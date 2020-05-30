import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private readonly appService;
    private readonly authService;
    constructor(appService: AppService, authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
    getHello(): string;
    getName(): string;
}
