import { ExecutionContext } from "@nestjs/common";
import { createParamDecorator } from "@nestjs/common";

export const WsClient = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const client = ctx.switchToWs().getClient();
        return client; // Trả về thông tin client từ WebSocket context
    },
);  