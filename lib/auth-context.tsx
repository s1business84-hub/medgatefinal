"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { User } from "@/lib/types";
import { getCurrentUser, loginUser, logoutUser, createUser, getUsers } from "@/lib/storage";
import { mockUsers } from "@/lib/mockData";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Initialize demo users if they don't exist
    const existingUsers = getUsers();
    if (existingUsers.length === 0) {
      mockUsers.forEach((user) => createUser(user));
    }
    return getCurrentUser();
  });

  const login = (email: string, password: string): boolean => {
    const loggedInUser = loginUser(email, password);
    if (loggedInUser) {
      setUser(loggedInUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
