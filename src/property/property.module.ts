import { Module, ValidationPipe } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService,

    // {
    //   provide:APP_PIPE,
    //   useClass:ValidationPipe
    // }

    //to use options with ValidationPipe
    // {
    //   provide: APP_PIPE,
    //   useFactory: () =>
    //     new ValidationPipe({
    //       whitelist: true,
    //       forbidNonWhitelisted: true,
    //     }),
    // },

    //or use useValue
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    }

  ]
})
export class PropertyModule {}
