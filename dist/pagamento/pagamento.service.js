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
exports.PagamentosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pagamento_entity_1 = require("./entities/pagamento.entity");
const pedido_entity_1 = require("../pedido/entities/pedido.entity");
let PagamentosService = class PagamentosService {
    pagamentoRepo;
    pedidoRepo;
    constructor(pagamentoRepo, pedidoRepo) {
        this.pagamentoRepo = pagamentoRepo;
        this.pedidoRepo = pedidoRepo;
    }
    async create(dto) {
        const pedido = await this.pedidoRepo.findOneBy({ id: dto.pedidoId });
        if (!pedido) {
            throw new common_1.NotFoundException('Pedido não encontrado');
        }
        const pagamento = this.pagamentoRepo.create({
            metodo: dto.formaPagamento,
            valor: dto.valorPago,
            status: dto.status,
            pedido,
        });
        try {
            return await this.pagamentoRepo.save(pagamento);
        }
        catch (error) {
            console.error('Erro ao salvar o pagamento:', error);
            throw new Error('Erro ao salvar o pagamento');
        }
    }
    async findAll() {
        return this.pagamentoRepo.find({ relations: ['pedido'] });
    }
    async findOne(id) {
        const pagamento = await this.pagamentoRepo.findOne({
            where: { id },
            relations: ['pedido'],
        });
        if (!pagamento) {
            throw new common_1.NotFoundException('Pagamento não encontrado');
        }
        return pagamento;
    }
    async update(id, dto) {
        const pagamento = await this.findOne(id);
        if (!pagamento) {
            throw new common_1.NotFoundException('Pagamento não encontrado');
        }
        if (dto.formaPagamento !== undefined)
            pagamento.metodo = dto.formaPagamento;
        if (dto.valorPago !== undefined)
            pagamento.valor = dto.valorPago;
        if (dto.status !== undefined)
            pagamento.status = dto.status;
        return this.pagamentoRepo.save(pagamento);
    }
    async remove(id) {
        const pagamento = await this.findOne(id);
        await this.pagamentoRepo.delete(pagamento.id);
    }
};
exports.PagamentosService = PagamentosService;
exports.PagamentosService = PagamentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pagamento_entity_1.Pagamento)),
    __param(1, (0, typeorm_1.InjectRepository)(pedido_entity_1.Pedido)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PagamentosService);
//# sourceMappingURL=pagamento.service.js.map