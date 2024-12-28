"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../models/user.schema");
const tvshow_schema_1 = require("../models/tvshow.schema");
const movie_schema_1 = require("../models/movie.schema");
let UserService = class UserService {
    constructor(userModel, tvShowModel, movieModel) {
        this.userModel = userModel;
        this.tvShowModel = tvShowModel;
        this.movieModel = movieModel;
    }
    async findByUsername(username) {
        return this.userModel.findOne({ username }).exec();
    }
    async createUser(createUserDto) {
        const newUser = new this.userModel(createUserDto);
        return await newUser.save();
    }
    async addToList(userId, contentId, contentType) {
        const user = await this.userModel.findById(userId).exec();
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const itemExists = user.myList.some((item) => item.contentId === contentId && item.contentType === contentType);
        if (itemExists) {
            throw new Error('Item already in the list');
        }
        let content;
        if (contentType === 'Movie') {
            content = await this.movieModel.findById(contentId).exec();
        }
        else if (contentType === 'TVShow') {
            content = await this.tvShowModel.findById(contentId).exec();
        }
        if (!content) {
            throw new common_1.NotFoundException(`${contentType} not found`);
        }
        user.myList.push({ contentId, contentType });
        await user.save();
        return { message: `${contentType} added to list` };
    }
    async listMyItems(userId, page = 1, limit = 10) {
        const user = await this.userModel.findById(userId).exec();
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const items = user.myList;
        const paginatedItems = items.slice((page - 1) * limit, page * limit);
        const populatedItems = [];
        for (const item of paginatedItems) {
            let content;
            if (item.contentType === 'Movie') {
                content = await this.movieModel.findById(item.contentId).exec();
            }
            else if (item.contentType === 'TVShow') {
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
    async removeFromList(userId, contentId, contentType) {
        const user = await this.userModel.findById(userId).exec();
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const itemIndex = user.myList.findIndex((item) => item.contentId === contentId && item.contentType === contentType);
        if (itemIndex === -1) {
            throw new Error('Item not found in the list');
        }
        user.myList.splice(itemIndex, 1);
        await user.save();
        return { message: 'Item removed from list' };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(tvshow_schema_1.TVShow.name)),
    __param(2, (0, mongoose_1.InjectModel)(movie_schema_1.Movie.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], UserService);
//# sourceMappingURL=list.servce.js.map