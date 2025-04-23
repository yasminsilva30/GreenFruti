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
exports.MotoboysService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const motoboy_entity_1 = require("./entities/motoboy.entity");
let MotoboysService = class MotoboysService {
    motoboyRepository;
    constructor(motoboyRepository) {
        this.motoboyRepository = motoboyRepository;
    }
    create(dto) {
        const motoboy = this.motoboyRepository.create(dto);
        return this.motoboyRepository.save(motoboy);
    }
    findAll() {
        return this.motoboyRepository.find({ relations: ['entregas'] });
    }
    findOne(id) {
        return this.motoboyRepository.findOne({
            where: { id },
            relations: ['entregas'],
        });
    }
    async update(id, dto) {
        const motoboy = await this.motoboyRepository.findOne({ where: { id } });
        if (!motoboy) {
            throw new common_1.NotFoundException(`Motoboy com ID ${id} não encontrado.`);
        }
        const updatedMotoboy = this.motoboyRepository.merge(motoboy, dto);
        return this.motoboyRepository.save(updatedMotoboy);
    }
    async remove(id) {
        const motoboy = await this.motoboyRepository.findOne({ where: { id } });
        if (!motoboy) {
            throw new common_1.NotFoundException(`Motoboy com ID ${id} não encontrado.`);
        }
        return this.motoboyRepository.delete(id);
    }
};
exports.MotoboysService = MotoboysService;
exports.MotoboysService = MotoboysService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(motoboy_entity_1.Motoboy)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MotoboysService);
//# sourceMappingURL=motoboy.service.js.map