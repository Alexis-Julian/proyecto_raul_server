import { Test, TestingModule } from '@nestjs/testing';
import { AuthViewController } from './auth-view.controller';

describe('AuthViewController', () => {
  let controller: AuthViewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthViewController],
    }).compile();

    controller = module.get<AuthViewController>(AuthViewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
