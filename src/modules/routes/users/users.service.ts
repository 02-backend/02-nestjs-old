import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRole } from 'src/models/users.model';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { PrismaService } from 'src/modules/app/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.user.findMany();
  }

  async getAllTeachers() {
    return this.prisma.user.findMany({
      where: {
        role: 'teacher',
      },
    });
  }

  async getAllByRole(role: UserRole) {
    const targetUsers = await this.prisma.user.findMany({
      where: {
        role,
      },
    });

    if (targetUsers.length === 0) {
      throw new NotFoundException(`Users not found with the role ${role}`);
    }

    return targetUsers;
  }

  async getById(id: number) {
    const targetUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!targetUser) {
      throw new NotFoundException('User not found');
    }

    return targetUser;
  }

  create(newUser: CreateUserDto) {
    return this.prisma.user.create({
      data: newUser,
    });
  }

  async updateById(id: number, updatedUser: UpdateUserDto) {
    const targetUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!targetUser) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.user.update({
      where: { id },
      data: updatedUser,
    });
  }

  async deleteById(id: number) {
    const targetUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!targetUser) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.user.delete({
      where: { id },
    });
  }
}
