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
exports.Loja = void 0;
const typeorm_1 = require("typeorm");
const dono_loja_entity_1 = require("../../dono-loja/entities/dono-loja.entity");
const pedido_entity_1 = require("../../pedido/entities/pedido.entity");
const estoque_entity_1 = require("../../estoque/entities/estoque.entity");
let Loja = class Loja {
    id;
    nome;
    endereco;
    latitude;
    longitude;
    donosLoja;
    pedidos;
    estoques;
};
exports.Loja = Loja;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Loja.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Loja.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Loja.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Loja.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Loja.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dono_loja_entity_1.DonoLoja, (donoLoja) => donoLoja.loja),
    __metadata("design:type", Array)
], Loja.prototype, "donosLoja", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pedido_entity_1.Pedido, (pedido) => pedido.loja),
    __metadata("design:type", Array)
], Loja.prototype, "pedidos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => estoque_entity_1.Estoque, (estoque) => estoque.loja),
    __metadata("design:type", Array)
], Loja.prototype, "estoques", void 0);
exports.Loja = Loja = __decorate([
    (0, typeorm_1.Entity)()
], Loja);
//# sourceMappingURL=loja.entity.js.map