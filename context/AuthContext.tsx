"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { usePathname, useRouter } from "next/navigation";

import type { User, AuthContextType } from "@/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const roleRedirects = {
  admin: "/admin",
  user: "/",
  dealer: "/dealer",
} as const;

const publicAuthPages = ["/auth/", "/auth/register"];

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthentication();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    // User is logged in but trying to access login/register
    if (user && publicAuthPages.includes(pathname)) {
      redirectByRole(user.role);
    }
  }, [user, isLoading, pathname]);

  const checkAuthentication = async () => {
    try {
      /**
       * If you're storing your auth information in localStorage:
       */
      const storedUser = localStorage.getItem("CarentoUser");

      if (!storedUser) {
        setUser(null);
        return;
      }

      const parsedUser: User = JSON.parse(storedUser);

      setUser(parsedUser);
    } catch (error) {
      console.error("Authentication check failed:", error);
      setUser(null);
      localStorage.removeItem("CarentoUser");
    } finally {
      setIsLoading(false);
    }
  };

  const redirectByRole = (role: User["role"]) => {
    const destination = roleRedirects[role];

    if (destination) {
      router.replace(destination);
    }
  };

  const login = (user:User, token:string)=>{
   localStorage.setItem('CarentoUser', JSON.stringify(user))
   localStorage.setItem('token', JSON.stringify(token))
   setUser(user)

   const destination = roleRedirects[user.role];

   if (destination) {
     router.replace(destination);
   }
   
  };

  const logout = () => {
    localStorage.removeItem("CarentoUser");
    localStorage.removeItem("token")

    setUser(null);

    router.replace("/auth");
  };



  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
