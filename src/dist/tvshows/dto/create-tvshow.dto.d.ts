import { EpisodeDto } from './episode.dto';
export declare class CreateTVshowDto {
    title: string;
    description: string;
    genres: string[];
    episodes: EpisodeDto[];
}
