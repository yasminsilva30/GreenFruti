/* eslint-disable prettier/prettier */

import { Test, TestingModule } from '@nestjs/testing';
import { FrutasService } from './fruta.service';

describe('FrutaService', () => {
  let service: FrutasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrutasService],
    }).compile();

    service = module.get<FrutasService>(FrutasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
