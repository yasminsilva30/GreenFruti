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
exports.DonoLojaController = void 0;
const common_1 = require("@nestjs/common");
const dono_loja_service_1 = require("./dono-loja.service");
const create_dono_loja_dto_1 = require("./dto/create-dono-loja.dto");
const update_dono_loja_dto_1 = require("./dto/update-dono-loja.dto");
const class_transformer_1 = require("class-transformer");
const dono_loja_entity_1 = require("./entities/dono-loja.entity");
let DonoLojaController = class DonoLojaController {
    donoLojaService;
    constructor(donoLojaService) {
        this.donoLojaService = donoLojaService;
    }
    async create(createDonoLojaDto) {
        const dono = await this.donoLojaService.create(createDonoLojaDto);
        return (0, class_transformer_1.plainToInstance)(dono_loja_entity_1.DonoLoja, dono, { excludeExtraneousValues: true });
    }
    async findAll() {
        const donos = await this.donoLojaService.findAll();
        return donos.map((dono) => (0, class_transformer_1.plainToInstance)(dono_loja_entity_1.DonoLoja, dono, { excludeExtraneousValues: true }));
    }
    async findOne(id) {
        const dono = await this.donoLojaService.findOne(+id);
        return (0, class_transformer_1.plainToInstance)(dono_loja_entity_1.DonoLoja, dono, { excludeExtraneousValues: true });
    }
    async update(id, updateDonoLojaDto) {
        const dono = await this.donoLojaService.update(+id, updateDonoLojaDto);
        return (0, class_transformer_1.plainToInstance)(dono_loja_entity_1.DonoLoja, dono, { excludeExtraneousValues: true });
    }
    remove(id) {
        return this.donoLojaService.remove(+id);
    }
};
exports.DonoLojaController = DonoLojaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dono_loja_dto_1.CreateDonoLojaDto]),
    __metadata("design:returntype", Promise)
], DonoLojaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DonoLojaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DonoLojaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dono_loja_dto_1.UpdateDonoLojaDto]),
    __metadata("design:returntype", Promise)
], DonoLojaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DonoLojaController.prototype, "remove", null);
exports.DonoLojaController = DonoLojaController = __decorate([
    (0, common_1.Controller)('donos-loja'),
    __metadata("design:paramtypes", [dono_loja_service_1.DonoLojaService])
], DonoLojaController);
//# sourceMappingURL=dono-loja.controller.js.map