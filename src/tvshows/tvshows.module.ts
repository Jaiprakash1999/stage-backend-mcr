import { Module } from '@nestjs/common';
import { TVShowsService } from './tvshows.service';
import { TVShowsController } from './tvshows.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TVShow, TVShowSchema } from '../models/tvshow.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: TVShow.name, schema: TVShowSchema }]),
  ],
  controllers: [TVShowsController],
  providers: [TVShowsService],
  exports: [MongooseModule],
})
export class TvshowsModule {}
