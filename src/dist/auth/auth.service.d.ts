import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/list/list.servce';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login({ username, password }: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    register({ username, password, }: {
        username: string;
        password: string;
    }): Promise<{
        message: string;
        access_token: string;
    }>;
    validateUser(username: string, password: string): Promise<import("../models/user.schema").User>;
}
