import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuardGuard } from './auth-guard/auth-guard.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @UseGuards(AuthGuardGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
