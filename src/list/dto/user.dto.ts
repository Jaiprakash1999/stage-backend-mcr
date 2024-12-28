import { IsString, IsEnum, IsNotEmpty } from 'class-validator';

export class AddToListDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  contentId: string;

  @IsNotEmpty()
  @IsEnum(['Movie', 'TVShow'])
  contentType: 'Movie' | 'TVShow';
}

export class RemoveFromListDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  contentId: string;

  @IsNotEmpty()
  @IsEnum(['Movie', 'TVShow'])
  contentType: 'Movie' | 'TVShow';
}
