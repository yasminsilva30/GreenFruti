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
exports.EnderecoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const endereco_entity_1 = require("./entities/endereco.entity");
const cliente_entity_1 = require("../cliente/entities/cliente.entity");
let EnderecoService = class EnderecoService {
    enderecoRepository;
    clienteRepository;
    constructor(enderecoRepository, clienteRepository) {
        this.enderecoRepository = enderecoRepository;
        this.clienteRepository = clienteRepository;
    }
    async create(createEnderecoDto) {
        const cliente = await this.clienteRepository.findOne({
            where: { id: createEnderecoDto.clienteId },
        });
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente com ID ${createEnderecoDto.clienteId} não encontrado.`);
        }
        const endereco = this.enderecoRepository.create({
            ...createEnderecoDto,
            cliente: cliente,
        });
        return this.enderecoRepository.save(endereco);
    }
    findAll() {
        return this.enderecoRepository.find({ relations: ['cliente'] });
    }
    findOne(id) {
        return this.enderecoRepository.findOne({
            where: { id },
            relations: ['cliente'],
        });
    }
    async update(id, updateEnderecoDto) {
        const endereco = await this.enderecoRepository.findOne({ where: { id } });
        if (!endereco) {
            throw new common_1.NotFoundException(`Endereço com ID ${id} não encontrado.`);
        }
        const enderecoAtualizado = this.enderecoRepository.merge(endereco, updateEnderecoDto);
        return this.enderecoRepository.save(enderecoAtualizado);
    }
    async remove(id) {
        const result = await this.enderecoRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Endereço com ID ${id} não encontrado.`);
        }
        return { message: `Endereço com ID ${id} removido com sucesso` };
    }
};
exports.EnderecoService = EnderecoService;
exports.EnderecoService = EnderecoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(endereco_entity_1.Endereco)),
    __param(1, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EnderecoService);
//# sourceMappingURL=endereco.service.js.map