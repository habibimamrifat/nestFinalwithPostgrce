import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(
         private readonly prismaService:PrismaService
    ){}

    async createUser(data:any){
        console.log("user created with data", data)

       const userCreation =  await this.prismaService.user.create({
            data:data
        })
        return userCreation;
    }
}
