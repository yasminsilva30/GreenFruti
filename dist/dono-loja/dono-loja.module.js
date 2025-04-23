"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonoLojaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dono_loja_entity_1 = require("./entities/dono-loja.entity");
const dono_loja_service_1 = require("./dono-loja.service");
const dono_loja_controller_1 = require("./dono-loja.controller");
let DonoLojaModule = class DonoLojaModule {
};
exports.DonoLojaModule = DonoLojaModule;
exports.DonoLojaModule = DonoLojaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dono_loja_entity_1.DonoLoja])],
        controllers: [dono_loja_controller_1.DonoLojaController],
        providers: [dono_loja_service_1.DonoLojaService],
        exports: [typeorm_1.TypeOrmModule],
    })
], DonoLojaModule);
//# sourceMappingURL=dono-loja.module.js.map