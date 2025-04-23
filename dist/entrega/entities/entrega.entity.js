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
exports.Entrega = void 0;
const typeorm_1 = require("typeorm");
const pedido_entity_1 = require("../../pedido/entities/pedido.entity");
const motoboy_entity_1 = require("../../motoboy/entities/motoboy.entity");
const endereco_entity_1 = require("../../endereco/entities/endereco.entity");
let Entrega = class Entrega {
    id;
    pedido;
    motoboy;
    endereco;
    status;
    dataEntrega;
};
exports.Entrega = Entrega;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Entrega.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pedido_entity_1.Pedido, (pedido) => pedido.entrega),
    __metadata("design:type", pedido_entity_1.Pedido)
], Entrega.prototype, "pedido", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => motoboy_entity_1.Motoboy, (motoboy) => motoboy.entrega),
    __metadata("design:type", motoboy_entity_1.Motoboy)
], Entrega.prototype, "motoboy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => endereco_entity_1.Endereco, (endereco) => endereco.entregas, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'enderecoId' }),
    __metadata("design:type", endereco_entity_1.Endereco)
], Entrega.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Entrega.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", Date)
], Entrega.prototype, "dataEntrega", void 0);
exports.Entrega = Entrega = __decorate([
    (0, typeorm_1.Entity)()
], Entrega);
//# sourceMappingURL=entrega.entity.js.map