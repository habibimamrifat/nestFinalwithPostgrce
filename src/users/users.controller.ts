import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userServices: UsersService) {}

  @Post()
  createUser(@Body() body:any){
    console.log("Creating user...", body);
    return this.userServices.createUser(body);
  }
}
