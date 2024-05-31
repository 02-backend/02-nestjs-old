import { UserRole } from 'src/models/users.model';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): any;
    getAllTeachers(): Promise<any>;
    getAllByRole(role: UserRole): Promise<any>;
    getById(id: number): Promise<any>;
    create(newUser: CreateUserDto): any;
    updateById(id: number, updatedUser: UpdateUserDto): Promise<any>;
    deleteById(id: number): Promise<any>;
}
