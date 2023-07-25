import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface UserCreationAttrs {
  email: string
  password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique indef. user ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({ example: 'somemail@mail', description: "user's email" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string

  @ApiProperty({ example: '123456FgHjk', description: "user's password" })
  @Column({ type: DataType.STRING, unique: false })
  password: string

  @ApiProperty({ example: 'true', description: 'banned or not' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean

  @ApiProperty({ example: 'spam', description: 'reasone for ban' })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string
}
