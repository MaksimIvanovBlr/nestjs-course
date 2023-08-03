import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common'
import { CreateUserDto } from './dto/creaate-user-dto'
import { UsersService } from './users.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from './users.models'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { Roles } from 'src/auth/roles-auth.decorator'
import { RloesGuard } from 'src/auth/roles.guard'
import { AddRoleDto } from './dto/add-role.dto'
import { BanUserDto } from './dto/ban-user.dto'
import { ValidationPipe } from 'src/pipes/validation.pipe'

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto)
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  // @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RloesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers()
  }
  @ApiOperation({ summary: 'assign a role to a user' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RloesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto)
  }

  @ApiOperation({ summary: 'ban a user' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RloesGuard)
  @Post('/ban')
  ban(@Body() dto: BanUserDto) {
    return this.usersService.ban(dto)
  }
}
