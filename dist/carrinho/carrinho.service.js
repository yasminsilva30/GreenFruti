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
exports.CarrinhoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const carrinho_entity_1 = require("./entities/carrinho.entity");
const cliente_entity_1 = require("../cliente/entities/cliente.entity");
const fruta_entity_1 = require("../fruta/entities/fruta.entity");
let CarrinhoService = class CarrinhoService {
    carrinhoRepository;
    clienteRepository;
    frutaRepository;
    constructor(carrinhoRepository, clienteRepository, frutaRepository) {
        this.carrinhoRepository = carrinhoRepository;
        this.clienteRepository = clienteRepository;
        this.frutaRepository = frutaRepository;
    }
    async create(dto) {
        const cliente = await this.clienteRepository.findOne({ where: { id: dto.clienteId } });
        if (!cliente) {
            throw new common_1.NotFoundException('Cliente não encontrado');
        }
        const fruta = await this.frutaRepository.findOne({ where: { id: dto.frutaId } });
        if (!fruta) {
            throw new common_1.NotFoundException('Fruta não encontrada');
        }
        const precoTotal = fruta.preco * dto.quantidade;
        const carrinho = this.carrinhoRepository.create({
            cliente,
            fruta,
            quantidade: dto.quantidade,
            precoTotal,
        });
        return this.carrinhoRepository.save(carrinho);
    }
    async findAll() {
        return this.carrinhoRepository.find({ relations: ['cliente', 'fruta'] });
    }
    async findOne(id) {
        const carrinho = await this.carrinhoRepository.findOne({
            where: { id },
            relations: ['cliente', 'fruta'],
        });
        if (!carrinho) {
            throw new common_1.NotFoundException(`Carrinho com id ${id} não encontrado`);
        }
        return carrinho;
    }
    async update(id, dto) {
        const carrinho = await this.findOne(id);
        await this.carrinhoRepository.update(id, dto);
        return { ...carrinho, ...dto };
    }
    async remove(id) {
        const carrinho = await this.findOne(id);
        if (!carrinho) {
            throw new common_1.NotFoundException(`Carrinho com id ${id} não encontrado`);
        }
        await this.carrinhoRepository.delete(id);
        return { message: `Carrinho com id ${id} foi removido com sucesso` };
    }
};
exports.CarrinhoService = CarrinhoService;
exports.CarrinhoService = CarrinhoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carrinho_entity_1.Carrinho)),
    __param(1, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
    __param(2, (0, typeorm_1.InjectRepository)(fruta_entity_1.Fruta)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CarrinhoService);
//# sourceMappingURL=carrinho.service.js.map