import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';

export default (app: INestApplication) => {
  const config = new DocumentBuilder().setTitle('API TEST').setDescription('The test API description').setVersion('1.0').addTag('cats').build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
};
