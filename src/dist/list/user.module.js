"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const list_servce_1 = require("./list.servce");
const user_controller_1 = require("./user.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../models/user.schema");
const common_1 = require("@nestjs/common");
const tvshows_module_1 = require("../tvshows/tvshows.module");
const movies_module_1 = require("../movies/movies.module");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
            tvshows_module_1.TvshowsModule,
            movies_module_1.MoviesModule,
        ],
        controllers: [user_controller_1.UserController],
        providers: [list_servce_1.UserService],
        exports: [list_servce_1.UserService],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map