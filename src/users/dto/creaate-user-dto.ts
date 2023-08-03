import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'
export class CreateUserDto {
  @ApiProperty({ example: 'somemail@mail.com', description: "user's email" })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'incorrect email' })
  readonly email: string

  @ApiProperty({ example: '123456AsDfg', description: "usesr's password" })
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, {
    message: 'The password must be at least 4 and no more then 16 characters',
  })
  readonly password: string
}
