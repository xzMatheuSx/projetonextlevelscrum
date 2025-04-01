import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // back-end/src/main.ts
app.enableCors({
  origin: ['https://projetonextlevelscrum.onrender.com']
});
}
bootstrap();