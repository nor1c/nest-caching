import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { Cache } from 'cache-manager';
import prisma from '../../config/database/client.prisma';

@Injectable()
export class PostService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async findAll(): Promise<Post[]> {
    const posts = await prisma.post.findMany()

    return posts
  }
}
