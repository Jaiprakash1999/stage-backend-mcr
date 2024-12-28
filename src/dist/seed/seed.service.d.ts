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
import { OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../models/user.schema';
import { TVShow } from '../models/tvshow.schema';
import { Movie } from '../models/movie.schema';
export declare class SeedService implements OnModuleInit {
    private userModel;
    private tvShowModel;
    private movieModel;
    private readonly logger;
    constructor(userModel: Model<User>, tvShowModel: Model<TVShow>, movieModel: Model<Movie>);
    onModuleInit(): Promise<void>;
    seedDatabase(): Promise<void>;
}
