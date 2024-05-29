export type UserRole = 'admin' | 'teacher' | 'students';

export class UserModel {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}
