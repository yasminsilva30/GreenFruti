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
exports.AvaliacaoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const avaliacao_entity_1 = require("./entities/avaliacao.entity");
const cliente_entity_1 = require("../cliente/entities/cliente.entity");
const pedido_entity_1 = require("../pedido/entities/pedido.entity");
const fruta_entity_1 = require("../fruta/entities/fruta.entity");
let AvaliacaoService = class AvaliacaoService {
    avaliacaoRepository;
    clienteRepository;
    pedidoRepository;
    frutaRepository;
    constructor(avaliacaoRepository, clienteRepository, pedidoRepository, frutaRepository) {
        this.avaliacaoRepository = avaliacaoRepository;
        this.clienteRepository = clienteRepository;
        this.pedidoRepository = pedidoRepository;
        this.frutaRepository = frutaRepository;
    }
    async create(dto) {
        const cliente = await this.clienteRepository.findOneBy({
            id: dto.clienteId,
        });
        const pedido = dto.pedidoId
            ? await this.pedidoRepository.findOneBy({ id: dto.pedidoId })
            : null;
        const fruta = dto.frutaId
            ? await this.frutaRepository.findOneBy({ id: dto.frutaId })
            : null;
        if (!cliente) {
            throw new Error('Cliente não encontrado');
        }
        if (dto.pedidoId && !pedido) {
            throw new Error('Pedido não encontrado');
        }
        if (dto.frutaId && !fruta) {
            throw new Error('Fruta não encontrada');
        }
        const avaliacao = new avaliacao_entity_1.Avaliacao();
        avaliacao.cliente = cliente;
        if (pedido) {
            avaliacao.pedido = pedido;
        }
        if (fruta) {
            avaliacao.fruta = fruta;
        }
        avaliacao.nota = dto.nota;
        if (!dto.comentario) {
            throw new Error('Comentário não pode ser vazio');
        }
        avaliacao.comentario = dto.comentario;
        return this.avaliacaoRepository.save(avaliacao);
    }
    findAll() {
        return this.avaliacaoRepository.find({
            relations: ['cliente', 'pedido', 'fruta'],
        });
    }
    findOne(id) {
        return this.avaliacaoRepository.findOne({
            where: { id },
            relations: ['cliente', 'pedido', 'fruta'],
        });
    }
    update(id, dto) {
        return this.avaliacaoRepository.update(id, dto);
    }
    remove(id) {
        return this.avaliacaoRepository.delete(id);
    }
};
exports.AvaliacaoService = AvaliacaoService;
exports.AvaliacaoService = AvaliacaoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(avaliacao_entity_1.Avaliacao)),
    __param(1, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
    __param(2, (0, typeorm_1.InjectRepository)(pedido_entity_1.Pedido)),
    __param(3, (0, typeorm_1.InjectRepository)(fruta_entity_1.Fruta)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AvaliacaoService);
//# sourceMappingURL=avaliacao.service.js.map