import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserDto } from './dto/creaate-user-dto'
import { UsersService } from './users.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from './users.models'

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto)
  }

  @ApiOperation({ summary: 'Gety all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.usersService.getAllUsers()
  }
}
