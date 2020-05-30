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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth/auth.service");
const photo_service_1 = require("./photo/photo.service");
let AppController = (() => {
    let AppController = class AppController {
        constructor(appService, authService, photoService) {
            this.appService = appService;
            this.authService = authService;
            this.photoService = photoService;
        }
        async login(req) {
            return this.authService.login(req.user);
        }
        getProfile(req) {
            return req.user;
        }
        getHello() {
            return this.appService.getHello();
        }
        getName() {
            return this.appService.getName();
        }
        getPhoto() {
            return this.photoService.findAll();
        }
    };
    __decorate([
        common_1.UseGuards(passport_1.AuthGuard('local')),
        common_1.Post('auth/login'),
        __param(0, common_1.Request()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AppController.prototype, "login", null);
    __decorate([
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Get('profile'),
        __param(0, common_1.Request()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppController.prototype, "getProfile", null);
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], AppController.prototype, "getHello", null);
    __decorate([
        common_1.Get('name'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], AppController.prototype, "getName", null);
    __decorate([
        common_1.Get('photo'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppController.prototype, "getPhoto", null);
    AppController = __decorate([
        common_1.Controller(),
        __metadata("design:paramtypes", [app_service_1.AppService,
            auth_service_1.AuthService,
            photo_service_1.PhotoService])
    ], AppController);
    return AppController;
})();
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map