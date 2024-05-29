import { Injectable } from '@nestjs/common';
import { UserRole } from 'src/models/users.model';
import { CreateUserDto, UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John', email: 'john@gmail.com', role: 'admin' },
    { id: 2, name: 'Dave', email: 'dave@gmail.com', role: 'teacher' },
    { id: 2, name: 'Julie', email: 'julie@gmail.com', role: 'student' },
  ];

  getAll() {
    return this.users;
  }

  getAllSupervisors() {
    return this.users.filter((user) => user.role === 'supervisor');
  }

  getAllByRole(role: UserRole) {
    console.log(role);
    return this.users.filter((user) => user.role === role);
  }

  getById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(newUser: CreateUserDto) {
    const latestUser = this.users.sort((a, b) => b.id - a.id)[0];
    const completedUser = {
      id: latestUser?.id + 1,
      ...newUser,
    };
    this.users.push(completedUser);

    return completedUser;
  }

  updateById(id: number, updatedUser: UpdateUserDto) {
    return this.users.map((user) => {
      return user.id === id
        ? {
            ...user,
            ...updatedUser,
          }
        : user;
    });
  }

  deleteById(id: number) {
    this.users.filter((user) => user.id !== id);
  }
}
