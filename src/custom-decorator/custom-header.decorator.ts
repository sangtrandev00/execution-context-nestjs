import { ExecutionContext } from "@nestjs/common";
import { createParamDecorator } from "@nestjs/common";

export const CustomHeader = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        console.log("data", data);
        return request.headers[data]; // Trả về giá trị header dựa trên key
    },
);