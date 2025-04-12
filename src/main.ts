import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: ['http://localhost:3000','https://job-admin-frontend-weld.vercel.app/'], // your frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, x-api-key',
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
  
}
bootstrap();
