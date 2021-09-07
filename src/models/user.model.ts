export type UserRole = 'user' | 'admin';

export interface CreateUserPayload {
  username: string;
  password: string;
  isAnonymous?: boolean;
  role?: UserRole;
}

export interface CreateUserResponse {
  message: string;
  accessToken: string;
  user: User;
}

export interface GetUserResponse {
  message: string;
  user: User;
}

export interface User {
  isAnonymous: boolean;
  role: UserRole;
  id: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}
