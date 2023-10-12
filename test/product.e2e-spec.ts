import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import mongoose from 'mongoose';
import { AppModule } from 'src/app.module';

describe('ProductController E2E Test', () => {
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
});
