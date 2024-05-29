import { UsersService } from './users.service';
import { UserRole } from 'src/models/users.model';
import { CreateUserDto, UpdateUserDto } from './users.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getAll(role?: UserRole): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    getAllSupervisors(): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    getById(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    create(newUser: CreateUserDto): {
        name: string;
        email: string;
        role: UserRole;
        id: number;
    };
    updateById(id: number, updatedUser: UpdateUserDto): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    deleteById(id: number): void;
}
