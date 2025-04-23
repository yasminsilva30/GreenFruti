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
exports.FrutasController = void 0;
const common_1 = require("@nestjs/common");
const fruta_service_1 = require("./fruta.service");
const create_fruta_dto_1 = require("./dto/create-fruta.dto");
const update_fruta_dto_1 = require("./dto/update-fruta.dto");
let FrutasController = class FrutasController {
    frutasService;
    constructor(frutasService) {
        this.frutasService = frutasService;
    }
    create(createFrutaDto) {
        return this.frutasService.create(createFrutaDto);
    }
    findAll() {
        return this.frutasService.findAll();
    }
    findOne(id) {
        return this.frutasService.findOne(+id);
    }
    update(id, updateFrutaDto) {
        return this.frutasService.update(+id, updateFrutaDto);
    }
    remove(id) {
        return this.frutasService.remove(+id);
    }
};
exports.FrutasController = FrutasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fruta_dto_1.CreateFrutaDto]),
    __metadata("design:returntype", void 0)
], FrutasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FrutasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FrutasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fruta_dto_1.UpdateFrutaDto]),
    __metadata("design:returntype", void 0)
], FrutasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FrutasController.prototype, "remove", null);
exports.FrutasController = FrutasController = __decorate([
    (0, common_1.Controller)('frutas'),
    __metadata("design:paramtypes", [fruta_service_1.FrutasService])
], FrutasController);
//# sourceMappingURL=fruta.controller.js.map