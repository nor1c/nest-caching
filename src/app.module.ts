import { CacheModule, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserController } from './user/user.controller'
import { UserModule } from './user/user.module'
import { UserService } from './user/user.service'

@Module({
  imports: [
    UserModule, 
    CacheModule.register({
      ttl: 30
    }
  )],
  controllers: [AppController, UserController],
  providers: [AppService, UserService]
})
export class AppModule {}
