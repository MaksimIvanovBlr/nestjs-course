import { Module, forwardRef } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './users.models'
import { Role } from 'src/roles/roles.models'
import { UserRoles } from 'src/roles/user-roles.model'
import { RolesModule } from 'src/roles/roles.module'
import { AuthModule } from 'src/auth/auth.module'
import { Post } from 'src/posts/posts.models'
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Post]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
