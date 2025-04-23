"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoboyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const motoboy_service_1 = require("./motoboy.service");
const motoboy_controller_1 = require("./motoboy.controller");
const motoboy_entity_1 = require("./entities/motoboy.entity");
let MotoboyModule = class MotoboyModule {
};
exports.MotoboyModule = MotoboyModule;
exports.MotoboyModule = MotoboyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([motoboy_entity_1.Motoboy])],
        controllers: [motoboy_controller_1.MotoboysController],
        providers: [motoboy_service_1.MotoboysService],
        exports: [motoboy_service_1.MotoboysService],
    })
], MotoboyModule);
//# sourceMappingURL=motoboy.module.js.map