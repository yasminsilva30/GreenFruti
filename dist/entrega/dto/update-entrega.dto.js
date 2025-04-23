"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEntregaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_entrega_dto_1 = require("./create-entrega.dto");
class UpdateEntregaDto extends (0, mapped_types_1.PartialType)(create_entrega_dto_1.CreateEntregaDto) {
}
exports.UpdateEntregaDto = UpdateEntregaDto;
//# sourceMappingURL=update-entrega.dto.js.map