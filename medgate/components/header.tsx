"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";

export function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <svg className="h-10 w-10" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Medical Cross */}
              <rect x="85" y="15" width="30" height="30" fill="url(#grad1)" rx="4"/>
              <rect x="95" y="20" width="10" height="20" fill="white"/>
              <rect x="80" y="30" width="40" height="10" fill="white"/>
              
              {/* Gate Arc */}
              <path d="M 40 50 Q 40 25 65 25" stroke="url(#grad1)" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 130 50 Q 130 25 155 25" stroke="url(#grad1)" strokeWidth="3" fill="none" strokeLinecap="round"/>
              
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: "#3B82F6", stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: "#6366F1", stopOpacity: 1}} />
                </linearGradient>
              </defs>
            </svg>
            <div>
              <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">MedGate</span>
              <p className="text-xs text-gray-500 font-medium">Your Gateway</p>
            </div>
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
          <div className="flex items-center space-x-2 sm:space-x-3">
            {user ? (
              <>
                <span className="text-gray-700 font-medium text-sm hidden sm:inline">
                  Welcome, {user.name}
                </span>
                <Link href={user.role === "admin" ? "/admin" : "/student"}>
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                    Dashboard
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                    Student Login
                  </Button>
                </Link>
                <Link href="/login?role=admin">
                  <Button size="sm" className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Admin Login
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
