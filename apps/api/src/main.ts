import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.AUTH_TRUSTED_ORIGINS?.split(",") ?? [
      "http://localhost:3000",
      "http://localhost:3001"
    ],
    credentials: true
  });

  const port = Number(process.env.PORT ?? 4000);
  await app.listen(port);
}

void bootstrap();
