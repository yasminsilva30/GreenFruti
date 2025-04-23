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
exports.EstoquesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const estoque_entity_1 = require("./entities/estoque.entity");
const fruta_entity_1 = require("../fruta/entities/fruta.entity");
const loja_entity_1 = require("../loja/entities/loja.entity");
let EstoquesService = class EstoquesService {
    estoqueRepo;
    frutaRepo;
    lojaRepo;
    constructor(estoqueRepo, frutaRepo, lojaRepo) {
        this.estoqueRepo = estoqueRepo;
        this.frutaRepo = frutaRepo;
        this.lojaRepo = lojaRepo;
    }
    async create(createEstoqueDto) {
        const fruta = await this.frutaRepo.findOne({ where: { id: createEstoqueDto.frutaId } });
        const loja = await this.lojaRepo.findOne({ where: { id: createEstoqueDto.lojaId } });
        if (!fruta) {
            throw new common_1.NotFoundException(`Fruta com ID ${createEstoqueDto.frutaId} não encontrada.`);
        }
        if (!loja) {
            throw new common_1.NotFoundException(`Loja com ID ${createEstoqueDto.lojaId} não encontrada.`);
        }
        const estoque = this.estoqueRepo.create(createEstoqueDto);
        return this.estoqueRepo.save(estoque);
    }
    async findAll() {
        return this.estoqueRepo.find();
    }
    async findOne(id) {
        const estoque = await this.estoqueRepo.findOne({ where: { id } });
        if (!estoque) {
            throw new common_1.NotFoundException(`Estoque com ID ${id} não encontrado.`);
        }
        return estoque;
    }
    async update(id, updateEstoqueDto) {
        const estoque = await this.estoqueRepo.findOne({ where: { id } });
        if (!estoque) {
            throw new common_1.NotFoundException(`Estoque com ID ${id} não encontrado.`);
        }
        return this.estoqueRepo.save({ ...estoque, ...updateEstoqueDto });
    }
    async remove(id) {
        const estoque = await this.estoqueRepo.findOne({ where: { id } });
        if (!estoque) {
            throw new common_1.NotFoundException(`Estoque com ID ${id} não encontrado.`);
        }
        return this.estoqueRepo.remove(estoque);
    }
};
exports.EstoquesService = EstoquesService;
exports.EstoquesService = EstoquesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(estoque_entity_1.Estoque)),
    __param(1, (0, typeorm_1.InjectRepository)(fruta_entity_1.Fruta)),
    __param(2, (0, typeorm_1.InjectRepository)(loja_entity_1.Loja)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EstoquesService);
//# sourceMappingURL=estoque.service.js.map