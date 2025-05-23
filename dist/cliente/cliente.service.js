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
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cliente_entity_1 = require("./entities/cliente.entity");
let ClientesService = class ClientesService {
    clienteRepository;
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    create(dto) {
        const cliente = this.clienteRepository.create(dto);
        return this.clienteRepository.save(cliente);
    }
    findAll() {
        return this.clienteRepository.find({
            relations: ['enderecos', 'pedidos', 'carrinhos'],
        });
    }
    async findOne(id) {
        const cliente = await this.clienteRepository.findOne({
            where: { id },
            relations: ['enderecos', 'pedidos', 'carrinhos'],
        });
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente com ID ${id} não encontrado.`);
        }
        return cliente;
    }
    async update(id, dto) {
        const cliente = await this.findOne(id);
        if (!cliente) {
            throw new Error(`Cliente com ID ${id} não encontrado`);
        }
        await this.clienteRepository.update(id, dto);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.clienteRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Cliente com ID ${id} não encontrado.`);
        }
        return { message: `Cliente com ID ${id} removido com sucesso.` };
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientesService);
//# sourceMappingURL=cliente.service.js.map