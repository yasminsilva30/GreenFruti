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
exports.EntregaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entrega_entity_1 = require("./entities/entrega.entity");
const pedido_entity_1 = require("../pedido/entities/pedido.entity");
const motoboy_entity_1 = require("../motoboy/entities/motoboy.entity");
const endereco_entity_1 = require("../endereco/entities/endereco.entity");
let EntregaService = class EntregaService {
    entregaRepository;
    pedidoRepository;
    motoboyRepository;
    enderecoRepository;
    constructor(entregaRepository, pedidoRepository, motoboyRepository, enderecoRepository) {
        this.entregaRepository = entregaRepository;
        this.pedidoRepository = pedidoRepository;
        this.motoboyRepository = motoboyRepository;
        this.enderecoRepository = enderecoRepository;
    }
    async create(dto) {
        const pedido = await this.pedidoRepository.findOneBy({ id: dto.pedidoId });
        const motoboy = await this.motoboyRepository.findOneBy({ id: dto.motoboyId });
        const endereco = await this.enderecoRepository.findOneBy({ id: dto.enderecoId });
        if (!pedido) {
            throw new common_1.NotFoundException('Pedido não encontrado');
        }
        if (!motoboy) {
            throw new common_1.NotFoundException('Motoboy não encontrado');
        }
        if (!endereco) {
            throw new common_1.NotFoundException('Endereço não encontrado');
        }
        const entrega = new entrega_entity_1.Entrega();
        entrega.pedido = pedido;
        entrega.motoboy = motoboy;
        entrega.endereco = endereco;
        entrega.status = dto.status || 'pendente';
        entrega.dataEntrega = new Date(dto.dataEntrega || '2023-01-01');
        return this.entregaRepository.save(entrega);
    }
    async update(id, dto) {
        const entrega = await this.entregaRepository.findOne({
            where: { id },
            relations: ['motoboy', 'endereco'],
        });
        if (!entrega) {
            throw new common_1.NotFoundException('Entrega não encontrada');
        }
        if (dto.status) {
            entrega.status = dto.status || 'default-status';
        }
        if (dto.dataEntrega) {
            entrega.dataEntrega = new Date(dto.dataEntrega);
        }
        if (dto.motoboyId) {
            const motoboy = await this.motoboyRepository.findOne({ where: { id: dto.motoboyId } });
            if (!motoboy) {
                throw new common_1.NotFoundException('Motoboy não encontrado');
            }
            entrega.motoboy = motoboy;
        }
        if (dto.enderecoId) {
            const endereco = await this.enderecoRepository.findOne({ where: { id: dto.enderecoId } });
            if (!endereco) {
                throw new common_1.NotFoundException('Endereço não encontrado');
            }
            entrega.endereco = endereco;
        }
        return this.entregaRepository.save(entrega);
    }
    async findAll() {
        return this.entregaRepository.find({
            relations: ['motoboy', 'endereco', 'pedido'],
        });
    }
    async findOne(id) {
        const entrega = await this.entregaRepository.findOne({
            where: { id },
            relations: ['motoboy', 'endereco', 'pedido'],
        });
        if (!entrega) {
            throw new common_1.NotFoundException('Entrega não encontrada');
        }
        return entrega;
    }
    async remove(id) {
        const entrega = await this.entregaRepository.findOneBy({ id });
        if (!entrega) {
            throw new common_1.NotFoundException('Entrega não encontrada');
        }
        await this.entregaRepository.delete(id);
    }
};
exports.EntregaService = EntregaService;
exports.EntregaService = EntregaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entrega_entity_1.Entrega)),
    __param(1, (0, typeorm_1.InjectRepository)(pedido_entity_1.Pedido)),
    __param(2, (0, typeorm_1.InjectRepository)(motoboy_entity_1.Motoboy)),
    __param(3, (0, typeorm_1.InjectRepository)(endereco_entity_1.Endereco)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EntregaService);
//# sourceMappingURL=entrega.service.js.map