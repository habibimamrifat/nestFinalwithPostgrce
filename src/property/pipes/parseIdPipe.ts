import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIdPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {

    console.log("meta data ===>",metadata)
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Invalid ID. ID must be a number');
    }
    if (val <= 0) throw new BadRequestException('ID must be a positive number');
    return val;
  }
}
