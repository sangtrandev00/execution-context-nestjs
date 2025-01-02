import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { EventsGateway } from './gateway.socket';

@Module({
    controllers: [ExampleController],
    providers: [EventsGateway],
})
export class ExampleModule { }
