import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const handler = context?.getHandler();
    const handlerClass = context?.getClass();
    console.log("handler", handler);
    console.log("class", handlerClass);
    console.log(`Incoming request: ${request.method} ${request.url}`);
    return next.handle().pipe(
      tap(() => console.log(`Request handled successfully`)),
    );
  }
}
