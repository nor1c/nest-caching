import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'

import prisma from '../../config/database/client.prisma'
import { Cache } from 'cache-manager'

@Injectable()
export class UserService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getAll() {
    let cachedUsers = await this.cacheManager.get('user_all')

    if (typeof cachedUsers === 'undefined') {
      const users = await prisma.user.findMany()
      await this.cacheManager.set('user_all', users)

      cachedUsers = await this.cacheManager.get('user_all')
    }

    return cachedUsers
  }
}
