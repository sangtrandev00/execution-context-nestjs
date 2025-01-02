import { createParamDecorator, ExecutionContext, SetMetadata } from '@nestjs/common';

export const CustomDecorator = (...args: string[]) => SetMetadata('custom-decorator', args);

export const CurrentUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        console.log("data", data);
        const request = ctx.switchToHttp().getRequest();
        return request.user; // Trả về đối tượng user từ request
    },
);