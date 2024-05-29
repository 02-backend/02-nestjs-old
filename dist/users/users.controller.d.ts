import { CrUpUser, UserRole } from './users.types';
import { UsersService } from './users.service';
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
    create(newUser: CrUpUser): void;
    updateById(id: number, updatedUser: CrUpUser): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    deleteById(id: string): any;
}
