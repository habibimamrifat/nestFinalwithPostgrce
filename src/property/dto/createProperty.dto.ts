import { IsNumber, IsString, Length } from 'class-validator';

export class CreatePropertyDTO {

  @IsNumber()
  id:number;

  @IsString({ always: true })
  @Length(5, 600, { groups: ['update'] })
  @Length(1, 50, { groups: ['create'] })
  name: string;

  @IsNumber({}, { always: true })
  price: number;

  @IsString({ always: true })
  description: string;
}
