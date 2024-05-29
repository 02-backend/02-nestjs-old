export type UserRole = 'admin' | 'supervisor' | 'user';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

export type CrUpUser = Omit<User, 'id'>;
