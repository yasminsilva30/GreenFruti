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
exports.Fruta = void 0;
const typeorm_1 = require("typeorm");
const carrinho_entity_1 = require("../../carrinho/entities/carrinho.entity");
const pedido_entity_1 = require("../../pedido/entities/pedido.entity");
const avaliacao_entity_1 = require("../../avaliacao/entities/avaliacao.entity");
const estoque_entity_1 = require("../../estoque/entities/estoque.entity");
let Fruta = class Fruta {
    id;
    nome;
    preco;
    quantidadeEstoque;
    carrinhos;
    pedidos;
    avaliacoes;
    estoques;
};
exports.Fruta = Fruta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Fruta.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Fruta.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Fruta.prototype, "preco", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Fruta.prototype, "quantidadeEstoque", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => carrinho_entity_1.Carrinho, (carrinho) => carrinho.fruta),
    __metadata("design:type", Array)
], Fruta.prototype, "carrinhos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pedido_entity_1.Pedido, (pedido) => pedido.fruta),
    __metadata("design:type", Array)
], Fruta.prototype, "pedidos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => avaliacao_entity_1.Avaliacao, (a) => a.cliente),
    __metadata("design:type", Array)
], Fruta.prototype, "avaliacoes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => estoque_entity_1.Estoque, (estoque) => estoque.fruta),
    __metadata("design:type", Array)
], Fruta.prototype, "estoques", void 0);
exports.Fruta = Fruta = __decorate([
    (0, typeorm_1.Entity)()
], Fruta);
//# sourceMappingURL=fruta.entity.js.map