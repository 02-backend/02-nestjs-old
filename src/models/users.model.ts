import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export type UserRole = 'admin' | 'teacher' | 'student';

export class UserModel {
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  age: number;

  @IsEmail()
  email: string;

  @IsEnum(['admin', 'teacher', 'student'], {
    message: '',
  })
  role: UserRole;
}
