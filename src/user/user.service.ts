import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'

import prisma from '../../config/database/client.prisma'
import { Cache } from 'cache-manager'

@Injectable()
export class UserService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getAll() {
    const users = await prisma.user.findMany()
    
    return users
  }
}
