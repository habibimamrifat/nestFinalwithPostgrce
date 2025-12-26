import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PropertyModule } from './property/property.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, AuthModule, PropertyModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
