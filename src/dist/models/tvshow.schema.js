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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TVShowSchema = exports.TVShow = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const episode_schema_1 = require("./episode.schema");
const constants_1 = require("../constants/constants");
let TVShow = class TVShow {
};
exports.TVShow = TVShow;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TVShow.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TVShow.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                type: String,
                enum: constants_1.genre,
            },
        ],
    }),
    __metadata("design:type", Array)
], TVShow.prototype, "genres", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [episode_schema_1.EpisodeSchema], default: [] }),
    __metadata("design:type", Array)
], TVShow.prototype, "episodes", void 0);
exports.TVShow = TVShow = __decorate([
    (0, mongoose_1.Schema)()
], TVShow);
exports.TVShowSchema = mongoose_1.SchemaFactory.createForClass(TVShow);
//# sourceMappingURL=tvshow.schema.js.map