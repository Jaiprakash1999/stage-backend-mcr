import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';
import { TvshowsModule } from './tvshows/tvshows.module';
import { UserModule } from './list/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017/stagedb'),
    MoviesModule,
    TvshowsModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
