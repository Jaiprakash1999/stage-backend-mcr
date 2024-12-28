import { TVShowsService } from './tvshows.service';
import { CreateTVshowDto } from './dto/create-tvshow.dto';
export declare class TVShowsController {
    private readonly tvShowsService;
    constructor(tvShowsService: TVShowsService);
    findAll(): Promise<import("../models/tvshow.schema").TVShow[]>;
    create(createTVShowDto: CreateTVshowDto): Promise<import("../models/tvshow.schema").TVShow>;
}
