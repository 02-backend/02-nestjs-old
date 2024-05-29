export type UserRole = 'admin' | 'teacher' | 'students';
export declare class UserModel {
    id: number;
    name: string;
    email: string;
    role: UserRole;
}
