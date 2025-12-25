import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { Request } from 'express';

export const RequestHeader = createParamDecorator(
  async (targetDto: any, ctx: ExecutionContext) => {
    const request :Request = ctx.switchToHttp().getRequest();
    const headers = request.headers;

    // Express lowercases all header keys
    const accessToken = headers['access-token'] || headers['authorization'];

    if (!accessToken) {
      throw new UnauthorizedException(
        'Access token is missing in request headers',
      );
    }

    const dto = plainToInstance(targetDto, headers, {
      excludeExtraneousValues: true,
    });

    await validateOrReject(dto as Record<string, any>, {});

    return dto;
  },
);
