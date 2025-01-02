import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from './roles.decorator';
import { RoleGuard } from 'src/role-guard/role-guard.guard';

@Controller('users')
@UseGuards(RoleGuard)
export class UsersController {

    @Roles('admin')
    @Get()
    findAll() {
        return 'This route is restricted to admins';
    }

    @Roles('subadmin')
    @Get('findOne')
    findOne() {
        return 'This route is restricted to subadmins';
    }

}
