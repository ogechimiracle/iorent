// src/components/auth/ProtectedRoute.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import type { UserRole } from "@/types/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const router = useRouter();

  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    // Not authenticated
    if (!user) {
      router.replace("/auth/");
      return;
    }

    // User doesn't have permission
    if (allowedRoles && !allowedRoles.includes(user.role)) {
      router.replace("/");
    }
  }, [user, isLoading, allowedRoles, router]);

  if (isLoading) {
    return <div>Checking authentication...</div>;
  }

  if (!user) {
    return null;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
}
