"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pedido_entity_1 = require("./entities/pedido.entity");
const pedido_service_1 = require("./pedido.service");
const pedido_controller_1 = require("./pedido.controller");
const cliente_entity_1 = require("../cliente/entities/cliente.entity");
const pagamento_entity_1 = require("../pagamento/entities/pagamento.entity");
const entrega_entity_1 = require("../entrega/entities/entrega.entity");
const carrinho_entity_1 = require("../carrinho/entities/carrinho.entity");
let PedidoModule = class PedidoModule {
};
exports.PedidoModule = PedidoModule;
exports.PedidoModule = PedidoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([pedido_entity_1.Pedido, cliente_entity_1.Cliente, pagamento_entity_1.Pagamento, entrega_entity_1.Entrega, carrinho_entity_1.Carrinho]),
        ],
        controllers: [pedido_controller_1.PedidosController],
        providers: [pedido_service_1.PedidosService],
        exports: [pedido_service_1.PedidosService],
    })
], PedidoModule);
//# sourceMappingURL=pedido.module.js.map