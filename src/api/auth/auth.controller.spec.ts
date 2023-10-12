import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthModule } from './auth.module';
import { RegisterAuthDto } from './dto/register-auth.dto';

describe('AuthController', () => {
  let controller: AuthController;
  const UserMockModel = {
    findOne: jest.fn(() => {
      return { id: Date.now(), email: 'probando10@hotmail.es', password: '$2b$10$3R5s4otOCpGc9xXwhCmn.OdkZ6CsXNiPnAHFMOV/DX53t1g3taREC' };
    }),

    // Otras funciones del modelo que necesites en tus pruebas
  };
  //Mock para req y response
  const req = { session: {} };
  const res = {
    cookie: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    })
      .overrideProvider(getModelToken('User'))
      .useValue(UserMockModel)
      .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('Should login a user', async () => {
    // Create mock request and response objects
    const dto: LoginAuthDto = {
      email: 'probando10@gmail.com',
      password: 'probando10',
    };

    expect(await controller.userLogin(res, req, dto)).toHaveProperty('token');
  });

  it('Should register a user', async () => {
    const dto: RegisterAuthDto = {
      username: 'userexample',
      email: 'user@example.com',
      password: '123',
    };

    expect(await controller.userRegister(res, res, dto)).toHaveBeenCalledWith(dto);
  });
});
