import { Controller, Get } from '@nestjs/common'

import prisma from '../config/database/client.prisma'

import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('/connection-test')
  async getConnectTest(): Promise<string> {
    try {
      const connect = await prisma.user.findMany()
      console.log(connect)

      return 'Connected established'
    } catch (error) {
      return 'Connection failed'
    }
  }
}
