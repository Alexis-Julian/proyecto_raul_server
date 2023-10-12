import { Test, TestingModule } from '@nestjs/testing';
import { AuthView } from './auth-view';

describe('AuthView', () => {
  let provider: AuthView;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthView],
    }).compile();

    provider = module.get<AuthView>(AuthView);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
