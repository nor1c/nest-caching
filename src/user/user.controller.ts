import { Controller, Get } from '@nestjs/common'

import { User } from '@prisma/client'
import prisma from '../../config/database/client.prisma'

@Controller('user')
export class UserController {
  @Get('/')
  async getAll(): Promise<User[]> {
    try {
      const users = await prisma.user.findMany()

      return users
    } catch (error) {
      return error.message
    }
  }
}
