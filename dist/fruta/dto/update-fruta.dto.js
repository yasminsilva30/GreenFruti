"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFrutaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_fruta_dto_1 = require("./create-fruta.dto");
class UpdateFrutaDto extends (0, mapped_types_1.PartialType)(create_fruta_dto_1.CreateFrutaDto) {
}
exports.UpdateFrutaDto = UpdateFrutaDto;
//# sourceMappingURL=update-fruta.dto.js.map