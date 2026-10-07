

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

const roleRedirects = {
  admin: "/admin",
  user: "/",
  dealer: "/dealer",
} as const;

export default function RedirectByRole() {
  const router = useRouter();

  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    if (!user) return;

    const destination = roleRedirects[user.role];

    if (destination) {
      router.replace(destination);
    }
  }, [user, isLoading, router]);

  return null;
}