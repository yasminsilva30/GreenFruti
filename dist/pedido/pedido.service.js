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
exports.PedidosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pedido_entity_1 = require("./entities/pedido.entity");
const cliente_entity_1 = require("../cliente/entities/cliente.entity");
const pagamento_entity_1 = require("../pagamento/entities/pagamento.entity");
const entrega_entity_1 = require("../entrega/entities/entrega.entity");
const carrinho_entity_1 = require("../carrinho/entities/carrinho.entity");
let PedidosService = class PedidosService {
    pedidoRepo;
    clienteRepo;
    pagamentoRepo;
    entregaRepo;
    carrinhoRepo;
    constructor(pedidoRepo, clienteRepo, pagamentoRepo, entregaRepo, carrinhoRepo) {
        this.pedidoRepo = pedidoRepo;
        this.clienteRepo = clienteRepo;
        this.pagamentoRepo = pagamentoRepo;
        this.entregaRepo = entregaRepo;
        this.carrinhoRepo = carrinhoRepo;
    }
    async create(dto) {
        const cliente = await this.clienteRepo.findOne({
            where: { id: dto.clienteId },
        });
        if (!cliente) {
            throw new common_1.NotFoundException('Cliente não encontrado');
        }
        let carrinhos = [];
        if (dto.carrinhos && dto.carrinhos.length) {
            carrinhos = await this.carrinhoRepo.findByIds(dto.carrinhos);
        }
        else {
            carrinhos = await this.carrinhoRepo.find({
                where: { cliente: { id: dto.clienteId }, pedido: (0, typeorm_2.IsNull)() },
            });
        }
        if (!carrinhos.length) {
            throw new common_1.NotFoundException('Nenhum item no carrinho para criar o pedido');
        }
        const total = carrinhos.reduce((acc, item) => acc + item.precoTotal, 0);
        const pedido = this.pedidoRepo.create({
            cliente,
            total,
        });
        if (dto.pagamentoId) {
            const pagamento = await this.pagamentoRepo.findOne({
                where: { id: dto.pagamentoId },
            });
            if (!pagamento) {
                throw new common_1.NotFoundException('Pagamento não encontrado');
            }
            pedido.pagamento = pagamento;
        }
        if (dto.entregaId) {
            const entrega = await this.entregaRepo.findOne({
                where: { id: dto.entregaId },
            });
            if (!entrega) {
                throw new common_1.NotFoundException('Entrega não encontrada');
            }
            pedido.entrega = entrega;
        }
        const savedPedido = await this.pedidoRepo.save(pedido);
        for (const item of carrinhos) {
            item.pedido = savedPedido;
            await this.carrinhoRepo.save(item);
        }
        return this.findOne(savedPedido.id);
    }
    findAll() {
        return this.pedidoRepo.find({
            relations: ['cliente', 'pagamento', 'entrega', 'carrinhos'],
        });
    }
    async findOne(id) {
        const pedido = await this.pedidoRepo.findOne({
            where: { id },
            relations: ['cliente', 'pagamento', 'entrega', 'carrinhos'],
        });
        if (!pedido) {
            throw new common_1.NotFoundException('Pedido não encontrado');
        }
        return pedido;
    }
    async update(id, dto) {
        const pedido = await this.findOne(id);
        if (dto.total !== undefined)
            pedido.total = dto.total;
        return this.pedidoRepo.save(pedido);
    }
    remove(id) {
        return this.pedidoRepo.delete(id).then(() => undefined);
    }
};
exports.PedidosService = PedidosService;
exports.PedidosService = PedidosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pedido_entity_1.Pedido)),
    __param(1, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
    __param(2, (0, typeorm_1.InjectRepository)(pagamento_entity_1.Pagamento)),
    __param(3, (0, typeorm_1.InjectRepository)(entrega_entity_1.Entrega)),
    __param(4, (0, typeorm_1.InjectRepository)(carrinho_entity_1.Carrinho)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PedidosService);
//# sourceMappingURL=pedido.service.js.map