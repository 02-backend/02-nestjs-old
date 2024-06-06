import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRole } from 'src/models/users.model';
import { CreateUserDto, UpdateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // GET /users
  @Get()
  getAll(@Query('role') role?: UserRole) {
    return role
      ? this.userService.getAllByRole(role)
      : this.userService.getAll();
  }

  // GET /users/supervisor
  @Get('teachers')
  getAllTeachers() {
    return this.userService.getAllTeachers();
  }

  // GET /users/:id
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getById(id);
  }

  // POST /users
  @Post()
  create(@Body(ValidationPipe) newUser: CreateUserDto) {
    return this.userService.create(newUser);
  }

  // PUT /users/:id
  @Put(':id')
  updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updatedUser: UpdateUserDto,
  ) {
    return this.userService.updateById(id, updatedUser);
  }

  // DELETE /users/:id
  @Delete(':id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteById(id);
  }
}
