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
exports.DonoLoja = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const loja_entity_1 = require("../../loja/entities/loja.entity");
let DonoLoja = class DonoLoja {
    id;
    nome;
    cpf;
    loja;
};
exports.DonoLoja = DonoLoja;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], DonoLoja.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DonoLoja.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DonoLoja.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => loja_entity_1.Loja, (loja) => loja.donosLoja),
    __metadata("design:type", loja_entity_1.Loja)
], DonoLoja.prototype, "loja", void 0);
exports.DonoLoja = DonoLoja = __decorate([
    (0, typeorm_1.Entity)()
], DonoLoja);
//# sourceMappingURL=dono-loja.entity.js.map