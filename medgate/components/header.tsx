"use client";

import Link from "next/link";
import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";

export function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MedGate</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/mission" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Mission
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/vision" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Vision
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/programs" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Programs
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/student" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Student Portal
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Welcome, {user.name}</span>
                <Link href={user.role === 'admin' ? '/admin' : '/student'}>
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
              </div>
            ) : (
              <Link href="/login">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Login / Sign Up
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
