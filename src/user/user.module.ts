import { CacheModule, Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  imports: [CacheModule.register()],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
