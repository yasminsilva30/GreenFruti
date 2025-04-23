"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cliente_entity_1 = require("./cliente/entities/cliente.entity");
const loja_entity_1 = require("./loja/entities/loja.entity");
const fruta_entity_1 = require("./fruta/entities/fruta.entity");
const motoboy_entity_1 = require("./motoboy/entities/motoboy.entity");
const dono_loja_entity_1 = require("./dono-loja/entities/dono-loja.entity");
const pedido_entity_1 = require("./pedido/entities/pedido.entity");
const pagamento_entity_1 = require("./pagamento/entities/pagamento.entity");
const estoque_entity_1 = require("./estoque/entities/estoque.entity");
const entrega_entity_1 = require("./entrega/entities/entrega.entity");
const avaliacao_entity_1 = require("./avaliacao/entities/avaliacao.entity");
const carrinho_entity_1 = require("./carrinho/entities/carrinho.entity");
const endereco_entity_1 = require("./endereco/entities/endereco.entity");
const cliente_module_1 = require("./cliente/cliente.module");
const loja_module_1 = require("./loja/loja.module");
const fruta_module_1 = require("./fruta/fruta.module");
const motoboy_module_1 = require("./motoboy/motoboy.module");
const dono_loja_module_1 = require("./dono-loja/dono-loja.module");
const pedido_module_1 = require("./pedido/pedido.module");
const pagamento_module_1 = require("./pagamento/pagamento.module");
const estoque_module_1 = require("./estoque/estoque.module");
const entrega_module_1 = require("./entrega/entrega.module");
const avaliacao_module_1 = require("./avaliacao/avaliacao.module");
const carrinho_module_1 = require("./carrinho/carrinho.module");
const endereco_module_1 = require("./endereco/endereco.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db.sqlite',
                entities: [
                    cliente_entity_1.Cliente,
                    loja_entity_1.Loja,
                    fruta_entity_1.Fruta,
                    motoboy_entity_1.Motoboy,
                    dono_loja_entity_1.DonoLoja,
                    pedido_entity_1.Pedido,
                    pagamento_entity_1.Pagamento,
                    estoque_entity_1.Estoque,
                    entrega_entity_1.Entrega,
                    avaliacao_entity_1.Avaliacao,
                    carrinho_entity_1.Carrinho,
                    endereco_entity_1.Endereco,
                ],
                synchronize: true,
            }),
            cliente_module_1.ClienteModule,
            loja_module_1.LojaModule,
            fruta_module_1.FrutaModule,
            motoboy_module_1.MotoboyModule,
            dono_loja_module_1.DonoLojaModule,
            pedido_module_1.PedidoModule,
            pagamento_module_1.PagamentoModule,
            estoque_module_1.EstoquesModule,
            entrega_module_1.EntregaModule,
            avaliacao_module_1.AvaliacaoModule,
            carrinho_module_1.CarrinhoModule,
            endereco_module_1.EnderecoModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map