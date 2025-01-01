import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionFilterFilter } from './exception-filter/exception-filter.filter';
import { LoggingInterceptor } from './logging/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor())
  app.useGlobalFilters(new ExceptionFilterFilter())
  await app.listen(3000);
}
bootstrap();
