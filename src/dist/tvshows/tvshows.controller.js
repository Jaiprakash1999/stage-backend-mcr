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
exports.TVShowsController = void 0;
const common_1 = require("@nestjs/common");
const tvshows_service_1 = require("./tvshows.service");
const create_tvshow_dto_1 = require("./dto/create-tvshow.dto");
const swagger_1 = require("@nestjs/swagger");
let TVShowsController = class TVShowsController {
    constructor(tvShowsService) {
        this.tvShowsService = tvShowsService;
    }
    async findAll() {
        return this.tvShowsService.findAll();
    }
    async create(createTVShowDto) {
        return this.tvShowsService.create(createTVShowDto);
    }
};
exports.TVShowsController = TVShowsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TVShowsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tvshow_dto_1.CreateTVshowDto]),
    __metadata("design:returntype", Promise)
], TVShowsController.prototype, "create", null);
exports.TVShowsController = TVShowsController = __decorate([
    (0, swagger_1.ApiTags)('TV Shows'),
    (0, common_1.Controller)('tvshows'),
    __metadata("design:paramtypes", [tvshows_service_1.TVShowsService])
], TVShowsController);
//# sourceMappingURL=tvshows.controller.js.map