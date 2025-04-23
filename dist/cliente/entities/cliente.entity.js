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
exports.Cliente = void 0;
const typeorm_1 = require("typeorm");
const endereco_entity_1 = require("../../endereco/entities/endereco.entity");
const pedido_entity_1 = require("../../pedido/entities/pedido.entity");
const carrinho_entity_1 = require("../../carrinho/entities/carrinho.entity");
const avaliacao_entity_1 = require("../../avaliacao/entities/avaliacao.entity");
let Cliente = class Cliente {
    id;
    nome;
    email;
    telefone;
    enderecos;
    pedidos;
    carrinhos;
    avaliacoes;
};
exports.Cliente = Cliente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cliente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cliente.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cliente.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cliente.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => endereco_entity_1.Endereco, (endereco) => endereco.cliente),
    __metadata("design:type", Array)
], Cliente.prototype, "enderecos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pedido_entity_1.Pedido, (pedido) => pedido.cliente),
    __metadata("design:type", Array)
], Cliente.prototype, "pedidos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => carrinho_entity_1.Carrinho, (carrinho) => carrinho.cliente),
    __metadata("design:type", Array)
], Cliente.prototype, "carrinhos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => avaliacao_entity_1.Avaliacao, (avaliacao) => avaliacao.cliente),
    __metadata("design:type", Array)
], Cliente.prototype, "avaliacoes", void 0);
exports.Cliente = Cliente = __decorate([
    (0, typeorm_1.Entity)()
], Cliente);
//# sourceMappingURL=cliente.entity.js.map