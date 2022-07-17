import { Controller, Get } from '@nestjs/common'

import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<any> {
    try {
      const users = await this.userService.getAll()

      return users
    } catch (error) {
      return error.message
    }
  }
}
