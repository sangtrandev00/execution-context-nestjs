import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileController } from './profile/profile.controller';
import { ProfileModule } from './profile/profile.module';
import { ExampleController } from './example/example.controller';
import { ExampleModule } from './example/example.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProfileModule, ExampleModule, UsersModule],
  controllers: [AppController, ProfileController, ExampleController],
  providers: [AppService],
})
export class AppModule { }
