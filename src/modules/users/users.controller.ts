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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRole } from 'src/models/users.model';
import { CreateUserDto, UpdateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get() // GET /users
  getAll(@Query('role') role?: UserRole) {
    return role
      ? this.userService.getAllByRole(role)
      : this.userService.getAll();
  }

  @Get('supervisor') // GET /users/supervisor
  getAllSupervisors() {
    return this.userService.getAllSupervisors();
  }

  @Get(':id') // GET /users/:id
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getById(id);
  }

  @Post() // POST /users
  create(@Body() newUser: CreateUserDto) {
    return this.userService.create(newUser);
  }

  @Put(':id') // PUT /users/:id
  updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedUser: UpdateUserDto,
  ) {
    return this.userService.updateById(id, updatedUser);
  }

  @Delete(':id') // DELETE /users/:id
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteById(id);
  }
}
