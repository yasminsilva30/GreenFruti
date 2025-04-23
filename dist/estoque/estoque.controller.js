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
exports.EstoquesController = void 0;
const common_1 = require("@nestjs/common");
const estoque_service_1 = require("./estoque.service");
const create_estoque_dto_1 = require("./dto/create-estoque.dto");
const update_estoque_dto_1 = require("./dto/update-estoque.dto");
let EstoquesController = class EstoquesController {
    estoquesService;
    constructor(estoquesService) {
        this.estoquesService = estoquesService;
    }
    async create(createEstoqueDto) {
        try {
            return await this.estoquesService.create(createEstoqueDto);
        }
        catch (error) {
            console.error('Erro ao criar estoque:', error);
            throw error;
        }
    }
    async findAll() {
        try {
            return await this.estoquesService.findAll();
        }
        catch (error) {
            console.error('Erro ao buscar todos os estoques:', error);
            throw error;
        }
    }
    async findOne(id) {
        try {
            return await this.estoquesService.findOne(+id);
        }
        catch (error) {
            console.error(`Erro ao buscar estoque com ID ${id}:`, error);
            throw error;
        }
    }
    async update(id, updateEstoqueDto) {
        try {
            return await this.estoquesService.update(+id, updateEstoqueDto);
        }
        catch (error) {
            console.error(`Erro ao atualizar estoque com ID ${id}:`, error);
            throw error;
        }
    }
    async remove(id) {
        try {
            return await this.estoquesService.remove(+id);
        }
        catch (error) {
            console.error(`Erro ao remover estoque com ID ${id}:`, error);
            throw error;
        }
    }
};
exports.EstoquesController = EstoquesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estoque_dto_1.CreateEstoqueDto]),
    __metadata("design:returntype", Promise)
], EstoquesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EstoquesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EstoquesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_estoque_dto_1.UpdateEstoqueDto]),
    __metadata("design:returntype", Promise)
], EstoquesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EstoquesController.prototype, "remove", null);
exports.EstoquesController = EstoquesController = __decorate([
    (0, common_1.Controller)('estoques'),
    __metadata("design:paramtypes", [estoque_service_1.EstoquesService])
], EstoquesController);
//# sourceMappingURL=estoque.controller.js.map