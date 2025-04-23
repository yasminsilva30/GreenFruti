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
exports.Pedido = void 0;
const typeorm_1 = require("typeorm");
const cliente_entity_1 = require("../../cliente/entities/cliente.entity");
const pagamento_entity_1 = require("../../pagamento/entities/pagamento.entity");
const entrega_entity_1 = require("../../entrega/entities/entrega.entity");
const carrinho_entity_1 = require("../../carrinho/entities/carrinho.entity");
const avaliacao_entity_1 = require("../../avaliacao/entities/avaliacao.entity");
let Pedido = class Pedido {
    id;
    total;
    cliente;
    pagamento;
    entrega;
    carrinhos;
    avaliacoes;
    fruta;
    loja;
};
exports.Pedido = Pedido;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pedido.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Pedido.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_entity_1.Cliente, (cliente) => cliente.pedidos),
    __metadata("design:type", cliente_entity_1.Cliente)
], Pedido.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => pagamento_entity_1.Pagamento, (pagamento) => pagamento.pedido),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", pagamento_entity_1.Pagamento)
], Pedido.prototype, "pagamento", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entrega_entity_1.Entrega, (entrega) => entrega.pedido),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", entrega_entity_1.Entrega)
], Pedido.prototype, "entrega", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => carrinho_entity_1.Carrinho, (carrinho) => carrinho.pedido),
    __metadata("design:type", Array)
], Pedido.prototype, "carrinhos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => avaliacao_entity_1.Avaliacao, (avaliacao) => avaliacao.pedido),
    __metadata("design:type", Array)
], Pedido.prototype, "avaliacoes", void 0);
exports.Pedido = Pedido = __decorate([
    (0, typeorm_1.Entity)()
], Pedido);
//# sourceMappingURL=pedido.entity.js.map