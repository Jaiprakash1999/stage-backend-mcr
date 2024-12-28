import { AddToListDto, RemoveFromListDto } from './dto/user.dto';
import { UserService } from './list.servce';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    listMyItems(userId: string, page?: number, limit?: number): Promise<{
        totalItems: number;
        currentPage: number;
        totalPages: number;
        items: any[];
    }>;
    addToList(body: AddToListDto): Promise<{
        message: string;
    }>;
    removeFromList(body: RemoveFromListDto): Promise<{
        message: string;
    }>;
}
