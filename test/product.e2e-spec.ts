import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import mongoose from 'mongoose';
import { AppModule } from '../src/app.module';
import { CreateProductDto } from 'src/api/product/dto/create-product.dto';

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

  it('should return 201 when the product is created successfully', async () => {
    const mockProduct: CreateProductDto = {
      title: 'Test',
      description: 'TestDescription',
      price: 1000,
      code: '41223',
      stock: 30,
      status: true,
      category: 'Electronica',
    };
    const response = await request(app.getHttpServer()).post('/api/products').send(mockProduct);
    console.log(response.body);
    expect(response.body).toHaveProperty('_id');
  });

  it('should return 409 if "code" field is repeated ', async () => {
    const mockProduct: CreateProductDto = {
      title: 'Test',
      description: 'TestDescription',
      price: 1000,
      code: '521223',
      stock: 30,
      status: true,
      category: 'Electronica',
    };
    const response = await request(app.getHttpServer()).post('/api/products').send(mockProduct);
    expect(response.statusCode).toBe(409);
  });

  it('should return 200 when the products are brought', async () => {
    const response = await request(app.getHttpServer()).get('/api/products');
    return expect(response.statusCode).toBe(200);
  });

  it('should return 200 when only returning one product', async () => {
    const MockIdProduct = '64a6f2f959a460c6f871dbf8';
    const response = await request(app.getHttpServer()).get(`/api/products/${MockIdProduct}`);
    return expect(response.statusCode).toBe(200);
  });

  it('should return 404 when id product not found', async () => {
    const MockIdProductNotExisting = '64a6f2f959a460c6f871dbf12';
    const response = await request(app.getHttpServer()).get(`/api/products/${MockIdProductNotExisting}`);
    return expect(response.statusCode).toEqual(404);
  });

  it('should return 200 if the product is updated', async () => {
    // Fields : title ,description,price ,code ,stock ,status,category
    const idProduct = '64a6f2f959a460c6f871dbf8';

    const MockProductUpdate = { price: 200 };

    const response = await request(app.getHttpServer()).patch(`/api/products/${idProduct}`).send(MockProductUpdate);

    expect(response.statusCode).toEqual(200);
  });

  it('should return 404 if the product does not exist and if you try to update ', async () => {
    const idProductNotExist = '64a6f2f959a460c6f871dbf88';

    const MockProductUpdate = { price: 200 };

    const response = await request(app.getHttpServer()).patch(`/api/products/${idProductNotExist}`).send(MockProductUpdate);

    expect(response.statusCode).toEqual(404);
  });

  it('should return 200 when product is removed', async () => {
    const idProductRemove = '64a6f2f959a460c6f871dc00';

    const response = await request(app.getHttpServer()).delete(`/api/products/${idProductRemove}`);

    expect(response.statusCode).toEqual(200);
  });

  it('should return 404 when trying to delete the product and it is not found', async () => {
    const idProductNotExist = '64a6f2f959a460c6f871dbf88';

    const response = await request(app.getHttpServer()).delete(`/api/products/${idProductNotExist}`);

    expect(response.statusCode).toBe(404);
  });
});
