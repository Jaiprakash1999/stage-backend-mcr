import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    findAll(): Promise<import("../models/movie.schema").Movie[]>;
    create(createMovieDto: CreateMovieDto): Promise<import("../models/movie.schema").Movie>;
}
