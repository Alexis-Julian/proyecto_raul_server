import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { LoginAuthDto } from 'src/api/auth/dto/login-auth.dto';
import mongoose from 'mongoose';
import { RegisterAuthDto } from 'src/api/auth/dto/register-auth.dto';

describe('AuthController E2E Test', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await mongoose.connection.close();
    // Prueba una nueva conexión después de cerrarla
    try {
      const newConnection = await mongoose.createConnection(process.env.MONGO);
      // Realiza pruebas en la nueva conexión si es necesario
      await newConnection.close();
    } catch (error) {
      console.error('Error al abrir una nueva conexión de base de datos:', error);
    }
  });

  describe('\nTest Login', () => {
    it('should return a 202 when valid email and password are provided', async () => {
      const MockAuthUser: LoginAuthDto = { email: 'probando10@hotmail.es', password: 'probando10' };

      const response = await request(app.getHttpServer()).post('/api/auth/login').send(MockAuthUser);
      return expect(response.body.status).toBe(202);
    });

    it('should return a 404 when invalid email is provided', async () => {
      const MockAuthInvalidEmail: LoginAuthDto = { email: 'probando10@test.es', password: 'probando10' };

      const response = await request(app.getHttpServer()).post('/api/auth/login').send(MockAuthInvalidEmail);
      return expect(response.body.status).toBe(404);
    });

    it('should return a 403 when invalid password is provided', async () => {
      const MockAuthInvalidPassword: LoginAuthDto = { email: 'probando10@hotmail.es', password: 'pobando10' };

      const response = await request(app.getHttpServer()).post('/api/auth/login').send(MockAuthInvalidPassword);
      return expect(response.body.status).toBe(403);
    });
  });

  describe('\nTest Register', () => {
    it('should return a 404 when invalid email is provided', async () => {
      const mockUser: RegisterAuthDto = {
        username: 'testuser',
        email: 'probando10@hotmail.es',
        password: 'testpassword',
      };

      const response = await request(app.getHttpServer()).post('/api/auth/register').send(mockUser);
      return expect(response.body.status).toBe(404);
    });

    it('should return a 201 when the user is registered', async () => {
      const mockUserRegister = {
        username: 'testUser',
        email: 'testUser@example.com',
        password: 'testUser',
      };
      const response = await request(app.getHttpServer()).post('/api/auth/register').send(mockUserRegister);
      return expect(response.body.status).toBe(201);
    });
  });
});
