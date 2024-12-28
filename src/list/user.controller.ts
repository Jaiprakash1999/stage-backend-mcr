import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiQuery,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AddToListDto, RemoveFromListDto } from './dto/user.dto';
import { UserService } from './list.servce';

@ApiTags('User')
@Controller('list')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //  GET /list: Lists all items added to the user's list (with pagination)
  @ApiOperation({ summary: 'List all items in user’s list with pagination' })
  @ApiQuery({ name: 'userId', required: true, type: String })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiResponse({ status: 200, description: 'Items retrieved successfully.' })
  @UseGuards(JwtAuthGuard)
  @Get()
  async listMyItems(
    @Query('userId') userId: string,
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ) {
    return this.userService.listMyItems(userId, page, limit);
  }

  // POST /list: Adds an item to the user's list
  @ApiOperation({ summary: 'Add an item to the user’s list' })
  @ApiBody({ type: AddToListDto })
  @ApiResponse({ status: 201, description: 'Item added successfully.' })
  @UseGuards(JwtAuthGuard)
  @Post()
  async addToList(@Body() body: AddToListDto) {
    return this.userService.addToList(
      body.userId,
      body.contentId,
      body.contentType,
    );
  }

  // DELETE /list: Removes an item from the user's list
  @ApiOperation({ summary: 'Remove an item from the user’s list' })
  @ApiBody({ type: RemoveFromListDto })
  @ApiResponse({ status: 200, description: 'Item removed successfully.' })
  @UseGuards(JwtAuthGuard)
  @Delete()
  async removeFromList(@Body() body: RemoveFromListDto) {
    return this.userService.removeFromList(
      body.userId,
      body.contentId,
      body.contentType,
    );
  }
}
