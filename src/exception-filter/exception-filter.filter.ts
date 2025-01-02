import { ArgumentsHost, Catch, ExceptionFilter, ForbiddenException, HttpException } from '@nestjs/common';

@Catch()
export class ExceptionFilterFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {

    console.log("exception: ", exception);

    if (exception instanceof ForbiddenException) {
      console.log("Bạn không có quyền đăng nhập resource này");
    }

    const ctx = host.switchToHttp();

    console.log("ctx", ctx);

    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
