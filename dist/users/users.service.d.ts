import { CrUpUser, UserRole } from './users.types';
export declare class UsersService {
    private users;
    getAll(): {
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
    getAllByRole(role: UserRole): {
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
    deleteById(id: number): void;
}
