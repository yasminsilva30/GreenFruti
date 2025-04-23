"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstoqueDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_estoque_dto_1 = require("./create-estoque.dto");
class UpdateEstoqueDto extends (0, mapped_types_1.PartialType)(create_estoque_dto_1.CreateEstoqueDto) {
}
exports.UpdateEstoqueDto = UpdateEstoqueDto;
//# sourceMappingURL=update-estoque.dto.js.map