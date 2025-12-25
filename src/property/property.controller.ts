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
import { RequestHeader } from './pipes/request-header';
import { HeaderDto } from './dto/headers.dto';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {
    this.propertyService = propertyService;
  }

  @Get('getProperty/:id')
  @HttpCode(201)
  getProperty(
    @Param('id', ParseIdPipe) id: number,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    console.log(typeof id, id);
    console.log(typeof sort, sort);
    return this.propertyService.getProperty(id, sort);
  }

  @Post('createProperty')
  createProperty(
    @RequestHeader(HeaderDto)
    headers: HeaderDto,
    @Body() body: CreatePropertyDTO,
  ) {
    console.log(headers);
    return this.propertyService.createProperty(body);
  }

  @Patch('updateProperty')
  updateProperty(@Body() body: CreatePropertyDTO) {
    return this.propertyService.updateProperty(body.id, body);
  }
}
