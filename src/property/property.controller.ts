import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  // ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreatePropertyDTO } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';

@Controller('property')
export class PropertyController {
  @Get('getProperty/:id')
  @HttpCode(201)
  getProperty(
    @Param('id', ParseIdPipe) id: number,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    console.log(typeof id, id);
    console.log(typeof sort, sort);
    return { id, sort };
  }

  @Post('createProperty')
  createProperty(@Body() body: CreatePropertyDTO) {
    return body;
  }

  @Patch('updateProperty')
  updateProperty(@Body() body: CreatePropertyDTO) {
    return body;
  }
}
