"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { createUser, getCurrentUser } from "@/lib/storage";

function getInitialRole(searchParams: ReturnType<typeof useSearchParams>) {
  const roleParam = searchParams?.get("role");
  return roleParam === "hospital" ? "hospital" : "student";
}

export default function LoginForm() {
  const searchParams = useSearchParams();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<"student" | "hospital">(() => getInitialRole(searchParams));
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      const success = login(email, password);
      if (success) {
        const u = getCurrentUser();
        if (u?.role === "admin") {
          router.push("/admin");
        } else if (u?.role === "hospital") {
          router.push("/hospital");
        } else {
          router.push("/student");
        }
      } else {
        setError("Invalid email or password");
      }
    } else {
      if (!name || !email || !password) {
        setError("Please fill in all fields");
        return;
      }

      createUser({ email, role, name });
      const success = login(email, password);
      if (success) {
        const u = getCurrentUser();
        if (u?.role === "admin") {
          router.push("/admin");
        } else if (u?.role === "hospital") {
          router.push("/hospital");
        } else {
          router.push("/student");
        }
      } else {
        setError("Registration failed");
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-gray-600">
              {isLogin ? `Sign in as ${role === "hospital" ? "Hospital" : "Student"}` : "Join MedGate platform"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Account Type
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value as "student" | "hospital")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="student">Student</option>
                    <option value="hospital">Hospital</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          {isLogin && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Don&apos;t have an account? Sign up
              </button>
            </div>
          )}

          {!isLogin && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(true)}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Already have an account? Sign in
              </button>
            </div>
          )}

          <div className="mt-4 text-center">
            <Link href="/" className="text-gray-600 hover:text-gray-800 text-sm">
              ← Back to Home
            </Link>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Demo Credentials:</strong><br />
              Student: student@example.com / password<br />
              Hospital: hospital1@medgate.com / password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
