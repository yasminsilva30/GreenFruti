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
exports.Carrinho = void 0;
const typeorm_1 = require("typeorm");
const cliente_entity_1 = require("../../cliente/entities/cliente.entity");
const fruta_entity_1 = require("../../fruta/entities/fruta.entity");
const pedido_entity_1 = require("../../pedido/entities/pedido.entity");
let Carrinho = class Carrinho {
    id;
    cliente;
    fruta;
    quantidade;
    precoTotal;
    pedido;
};
exports.Carrinho = Carrinho;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Carrinho.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_entity_1.Cliente, (cliente) => cliente.carrinhos, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", cliente_entity_1.Cliente)
], Carrinho.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => fruta_entity_1.Fruta, (fruta) => fruta.carrinhos, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", fruta_entity_1.Fruta)
], Carrinho.prototype, "fruta", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Carrinho.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Carrinho.prototype, "precoTotal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pedido_entity_1.Pedido, (pedido) => pedido.carrinhos, { nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", pedido_entity_1.Pedido)
], Carrinho.prototype, "pedido", void 0);
exports.Carrinho = Carrinho = __decorate([
    (0, typeorm_1.Entity)()
], Carrinho);
//# sourceMappingURL=carrinho.entity.js.map