import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
    } | {
        message: string;
    }>;
    register(registerDto: {
        username: string;
        password: string;
    }): Promise<{
        message: string;
        access_token: string;
    }>;
    getProfile(req: any): Promise<any>;
}
