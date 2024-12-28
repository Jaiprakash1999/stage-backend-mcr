/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Model } from 'mongoose';
import { User, UserDocument } from '../models/user.schema';
import { TVShow } from '../models/tvshow.schema';
import { Movie } from '../models/movie.schema';
export declare class UserService {
    private readonly userModel;
    private readonly tvShowModel;
    private readonly movieModel;
    constructor(userModel: Model<UserDocument>, tvShowModel: Model<TVShow>, movieModel: Model<Movie>);
    findByUsername(username: string): Promise<User | null>;
    createUser(createUserDto: {
        username: string;
        password: string;
    }): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
    addToList(userId: string, contentId: string, contentType: 'Movie' | 'TVShow'): Promise<{
        message: string;
    }>;
    listMyItems(userId: string, page?: number, limit?: number): Promise<{
        totalItems: number;
        currentPage: number;
        totalPages: number;
        items: any[];
    }>;
    removeFromList(userId: string, contentId: string, contentType: 'Movie' | 'TVShow'): Promise<{
        message: string;
    }>;
}
