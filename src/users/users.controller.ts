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
import { CrUpUser, UserRole } from './users.types';
import { UsersService } from './users.service';

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
  create(@Body() newUser: CrUpUser) {
    return this.userService.create(newUser);
  }

  @Put(':id') // PUT /users/:id
  updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedUser: CrUpUser,
  ) {
    return this.userService.updateById(id, updatedUser);
  }

  @Delete(':id') // DELETE /users/:id
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteById(id);
  }
}
