/* eslint-disable prettier/prettier */

import { Test, TestingModule } from '@nestjs/testing';
import { FrutasController } from './fruta.controller';
import { FrutasService } from './fruta.service';

describe('FrutaController', () => {
  let controller: FrutasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrutasController],
      providers: [FrutasService],
    }).compile();

    controller = module.get<FrutasController>(FrutasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
