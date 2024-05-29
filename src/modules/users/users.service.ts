import { Injectable, NotFoundException } from '@nestjs/common';
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
    const targetUsers = this.users.filter((user) => user.role === 'supervisor');

    if (targetUsers.length === 0) {
      throw new NotFoundException('Users not found with the role supervisor');
    }

    return targetUsers;
  }

  getAllByRole(role: UserRole) {
    const targetUsers = this.users.filter((user) => user.role === role) || [];

    if (targetUsers.length === 0) {
      throw new NotFoundException(`Users not found with the role ${role}`);
    }

    return targetUsers;
  }

  getById(id: number) {
    const targetUser = this.users.find((user) => user.id === id);

    if (!targetUser) {
      throw new NotFoundException('User not found');
    }

    return targetUser;
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
    const targetUser = this.users.find((user) => user.id === id);

    if (!targetUser) {
      throw new NotFoundException('User not found');
    }

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
    const targetUser = this.users.find((user) => user.id === id);

    if (!targetUser) {
      throw new NotFoundException('User not found');
    }

    this.users.filter((user) => user.id !== id);
  }
}
