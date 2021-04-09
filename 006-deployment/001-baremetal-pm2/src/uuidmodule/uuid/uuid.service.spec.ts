import { Test, TestingModule } from '@nestjs/testing';
import { UuidV4Service } from './uuid.service';

describe('UuidService', () => {
  let service: UuidV4Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UuidV4Service],
    }).compile();

    service = module.get<UuidV4Service>(UuidV4Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
