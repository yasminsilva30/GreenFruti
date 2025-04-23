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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonoLojaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const dono_loja_entity_1 = require("./entities/dono-loja.entity");
let DonoLojaService = class DonoLojaService {
    donoLojaRepo;
    constructor(donoLojaRepo) {
        this.donoLojaRepo = donoLojaRepo;
    }
    async create(createDonoLojaDto) {
        const novoDono = this.donoLojaRepo.create(createDonoLojaDto);
        return await this.donoLojaRepo.save(novoDono);
    }
    async findAll() {
        return await this.donoLojaRepo.find({
            relations: ['loja'],
            select: ['id', 'nome', 'cpf', 'loja'],
        });
    }
    async findOne(id) {
        return await this.donoLojaRepo.findOne({
            where: { id },
            relations: ['loja'],
            select: ['id', 'nome', 'cpf', 'loja'],
        });
    }
    async update(id, updateDonoLojaDto) {
        await this.donoLojaRepo.update(id, updateDonoLojaDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.donoLojaRepo.delete(id);
    }
};
exports.DonoLojaService = DonoLojaService;
exports.DonoLojaService = DonoLojaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dono_loja_entity_1.DonoLoja)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DonoLojaService);
//# sourceMappingURL=dono-loja.service.js.map