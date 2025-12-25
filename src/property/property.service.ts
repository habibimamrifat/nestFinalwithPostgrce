import { Injectable } from '@nestjs/common';
import { CreatePropertyDTO } from './dto/createProperty.dto';

@Injectable()
export class PropertyService {
  getProperty(id: number, sort: boolean) {
    // Business logic to retrieve a property by id and sort order
    console.log('i am being called');
    return { id, sort, name: 'Sample Property' };
  }

  createProperty(propertyData: any): CreatePropertyDTO {
    // Business logic to create a new property
    console.log('i am being called');
    return { ...propertyData };
  }

  updateProperty(id: number, updateData: Partial<CreatePropertyDTO>) {
    // Business logic to update an existing property
    return { id, ...updateData };
  }
}
