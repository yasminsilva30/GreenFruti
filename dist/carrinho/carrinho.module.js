"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const carrinho_entity_1 = require("./entities/carrinho.entity");
const carrinho_service_1 = require("./carrinho.service");
const carrinho_controller_1 = require("./carrinho.controller");
const cliente_entity_1 = require("../cliente/entities/cliente.entity");
const fruta_entity_1 = require("../fruta/entities/fruta.entity");
let CarrinhoModule = class CarrinhoModule {
};
exports.CarrinhoModule = CarrinhoModule;
exports.CarrinhoModule = CarrinhoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([carrinho_entity_1.Carrinho, cliente_entity_1.Cliente, fruta_entity_1.Fruta]),
        ],
        providers: [carrinho_service_1.CarrinhoService],
        controllers: [carrinho_controller_1.CarrinhoController],
    })
], CarrinhoModule);
//# sourceMappingURL=carrinho.module.js.map