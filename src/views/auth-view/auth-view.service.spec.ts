import { Test, TestingModule } from '@nestjs/testing';
import { AuthViewService } from './auth-view.service';

describe('AuthViewService', () => {
  let service: AuthViewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthViewService],
    }).compile();

    service = module.get<AuthViewService>(AuthViewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
