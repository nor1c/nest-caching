import { CacheInterceptor, CacheModule, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserController } from './user/user.controller'
import { UserModule } from './user/user.module'
import { UserService } from './user/user.service'
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
import { APP_INTERCEPTOR } from '@nestjs/core'

@Module({
  imports: [
    UserModule, 
    CacheModule.register({
      ttl: 30
    }), PostModule
  ],
  controllers: [AppController, UserController, PostController],
  providers: [
    AppService, UserService, PostService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }
  ]
})
export class AppModule {}
