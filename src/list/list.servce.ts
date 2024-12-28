import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../models/user.schema';
import { TVShow } from '../models/tvshow.schema';
import { Movie } from '../models/movie.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(TVShow.name) private readonly tvShowModel: Model<TVShow>,
    @InjectModel(Movie.name) private readonly movieModel: Model<Movie>,
  ) {}

  async findByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({ username }).exec();
  }

  async createUser(createUserDto: { username: string; password: string }) {
    const newUser = new this.userModel(createUserDto);
    return await newUser.save();
  }

  async addToList(
    userId: string,
    contentId: string,
    contentType: 'Movie' | 'TVShow',
  ) {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Check if the item already exists in the user's list
    const itemExists = user.myList.some(
      (item) =>
        item.contentId === contentId && item.contentType === contentType,
    );
    if (itemExists) {
      throw new Error('Item already in the list');
    }

    // Fetch the content from the respective schema based on contentType
    let content;
    if (contentType === 'Movie') {
      content = await this.movieModel.findById(contentId).exec();
    } else if (contentType === 'TVShow') {
      content = await this.tvShowModel.findById(contentId).exec();
    }

    if (!content) {
      throw new NotFoundException(`${contentType} not found`);
    }

    // Add the item to the user's list
    user.myList.push({ contentId, contentType });
    await user.save();
    return { message: `${contentType} added to list` };
  }

  // List all items added to the user's list (with pagination support)
  async listMyItems(userId: string, page: number = 1, limit: number = 10) {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const items = user.myList;
    const paginatedItems = items.slice((page - 1) * limit, page * limit); // Basic pagination logic

    // Fetch full details of the items (Movies and TV Shows)
    const populatedItems = [];
    for (const item of paginatedItems) {
      let content;
      if (item.contentType === 'Movie') {
        content = await this.movieModel.findById(item.contentId).exec();
      } else if (item.contentType === 'TVShow') {
        content = await this.tvShowModel.findById(item.contentId).exec();
      }

      if (content) {
        populatedItems.push(content);
      }
    }

    return {
      totalItems: items.length,
      currentPage: page,
      totalPages: Math.ceil(items.length / limit),
      items: populatedItems,
    };
  }

  // Remove an item from the user's list
  async removeFromList(
    userId: string,
    contentId: string,
    contentType: 'Movie' | 'TVShow',
  ) {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const itemIndex = user.myList.findIndex(
      (item) =>
        item.contentId === contentId && item.contentType === contentType,
    );
    if (itemIndex === -1) {
      throw new Error('Item not found in the list');
    }

    // Remove the item from the user's list
    user.myList.splice(itemIndex, 1);
    await user.save();
    return { message: 'Item removed from list' };
  }
}
