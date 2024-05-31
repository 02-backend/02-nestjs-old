import { UsersService } from './users.service';
import { UserRole } from 'src/models/users.model';
import { CreateUserDto, UpdateUserDto } from './users.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getAll(role?: UserRole): any;
    getAllTeachers(): Promise<any>;
    getById(id: number): Promise<any>;
    create(newUser: CreateUserDto): any;
    updateById(id: number, updatedUser: UpdateUserDto): Promise<any>;
    deleteById(id: number): Promise<any>;
}
