import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { PostsService } from './posts.service'
import { PostsController } from './posts.controller'
import { User } from 'src/users/users.models'
import { Post } from './posts.models'
import { FilesModule } from 'src/files/files.module'

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [SequelizeModule.forFeature([User, Post]), FilesModule],
})
export class PostsModule {}
