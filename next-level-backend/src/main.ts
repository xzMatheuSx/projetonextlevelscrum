import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  const port = process.env.PORT || 3000; // Usa a porta do Render ou 3000 localmente
  await app.listen(port);
  console.log(`Aplicação rodando na porta ${port}`); // Log para verificar a porta
}
bootstrap();