import { UserService } from './list.servce';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../models/user.schema';
import { Module } from '@nestjs/common';
import { TvshowsModule } from 'src/tvshows/tvshows.module';
import { MoviesModule } from 'src/movies/movies.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    TvshowsModule,
    MoviesModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
