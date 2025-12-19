import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get('getProperty')
  @HttpCode(201)
  getProperty(@Query() id: any) {
    // return { message: 'here is the query', id: id };
    console.log(id);
    return id;
  }

  @Post('createProperty')
  createProperty(@Body() body: any) {
    return body;
  }
}
