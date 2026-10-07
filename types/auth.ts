
export type UserRole = "admin" | "user" | "dealer";

export interface User{
   id: string;
   name: string;
   email: string;
   role: UserRole;
}

export interface AuthContextType{
   user: User | null;
   isLoading: boolean;
   isAuthenticated: boolean;
   login: (user: User, token: string) => void;
   logout: () => void;
}