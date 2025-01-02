import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log("context", context.getHandler());
    console.log("roles", roles);
    if (!roles) {
      return true; // Nếu không có metadata 'roles', cho phép truy cập
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user ?? {};
    user.roles = ['user', 'admin'];

    return roles.some((role) => user?.roles?.includes(role));
  }
}
