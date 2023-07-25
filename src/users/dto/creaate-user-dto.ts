import { ApiProperty } from '@nestjs/swagger'
export class CreateUserDto {
  @ApiProperty({ example: 'somemail@mail.com', description: "user's email" })
  readonly email: string

  @ApiProperty({ example: '123456AsDfg', description: "usesr's password" })
  readonly password: string
}
