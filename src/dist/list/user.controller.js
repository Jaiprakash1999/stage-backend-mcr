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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const user_dto_1 = require("./dto/user.dto");
const list_servce_1 = require("./list.servce");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async listMyItems(userId, page = 1, limit = 10) {
        return this.userService.listMyItems(userId, page, limit);
    }
    async addToList(body) {
        return this.userService.addToList(body.userId, body.contentId, body.contentType);
    }
    async removeFromList(body) {
        return this.userService.removeFromList(body.userId, body.contentId, body.contentType);
    }
};
exports.UserController = UserController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List all items in user’s list with pagination' }),
    (0, swagger_1.ApiQuery)({ name: 'userId', required: true, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, example: 1 }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, example: 10 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Items retrieved successfully.' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('userId')),
    __param(1, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "listMyItems", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add an item to the user’s list' }),
    (0, swagger_1.ApiBody)({ type: user_dto_1.AddToListDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Item added successfully.' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.AddToListDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addToList", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remove an item from the user’s list' }),
    (0, swagger_1.ApiBody)({ type: user_dto_1.RemoveFromListDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Item removed successfully.' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.RemoveFromListDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removeFromList", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('list'),
    __metadata("design:paramtypes", [list_servce_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map