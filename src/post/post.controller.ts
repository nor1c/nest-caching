import { CacheKey, CacheTTL, CACHE_MANAGER, Controller, Get, Inject, UseInterceptors } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PostService } from './post.service';

@Controller('post')
// @UseInterceptors(CacheInterceptor)
export class PostController {
  constructor(
    private readonly postService: PostService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) {}

  @Get()
  @CacheKey('post_all')
  @CacheTTL(7)
  async getAll() {
    try {
      const posts = await this.postService.findAll()
      
      return posts
    } catch (error) {
      return error.message
    }
  }
}
