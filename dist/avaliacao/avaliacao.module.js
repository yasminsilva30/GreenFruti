"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvaliacaoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const avaliacao_entity_1 = require("./entities/avaliacao.entity");
const cliente_entity_1 = require("../cliente/entities/cliente.entity");
const pedido_entity_1 = require("../pedido/entities/pedido.entity");
const fruta_entity_1 = require("../fruta/entities/fruta.entity");
const avaliacao_service_1 = require("./avaliacao.service");
const avaliacao_controller_1 = require("./avaliacao.controller");
let AvaliacaoModule = class AvaliacaoModule {
};
exports.AvaliacaoModule = AvaliacaoModule;
exports.AvaliacaoModule = AvaliacaoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([avaliacao_entity_1.Avaliacao, cliente_entity_1.Cliente, pedido_entity_1.Pedido, fruta_entity_1.Fruta])],
        controllers: [avaliacao_controller_1.AvaliacaoController],
        providers: [avaliacao_service_1.AvaliacaoService],
    })
], AvaliacaoModule);
//# sourceMappingURL=avaliacao.module.js.map