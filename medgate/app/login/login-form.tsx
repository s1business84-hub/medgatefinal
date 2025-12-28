"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { createUser, getCurrentUser } from "@/lib/storage";
import { LiquidParallax } from "@/components/ui/liquid-parallax";

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
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <LiquidParallax />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-950/50 to-black/70" />
      <div className="relative max-w-md w-full">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-100 mb-2">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-slate-300">
              {isLogin ? `Sign in as ${role === "hospital" ? "Hospital" : "Student"}` : "Join MedGate platform"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-white/15 bg-white/5 text-slate-100 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">
                    Account Type
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value as "student" | "hospital")}
                    className="w-full px-4 py-3 border border-white/15 bg-white/5 text-slate-100 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="student">Student</option>
                    <option value="hospital">Hospital</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-white/15 bg-white/5 text-slate-100 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-white/15 bg-white/5 text-slate-100 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <div className="bg-rose-500/10 border border-rose-300/30 text-rose-100 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-cyan-400 hover:to-indigo-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors font-semibold shadow-lg"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          {isLogin && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(false)}
                className="text-cyan-200 hover:text-cyan-100 text-sm"
              >
                Don&apos;t have an account? Sign up
              </button>
            </div>
          )}

          {!isLogin && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(true)}
                className="text-cyan-200 hover:text-cyan-100 text-sm"
              >
                Already have an account? Sign in
              </button>
            </div>
          )}

          <div className="mt-4 text-center">
            <Link href="/" className="text-slate-300 hover:text-slate-100 text-sm">
              ← Back to Home
            </Link>
          </div>

          <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-lg">
            <p className="text-sm text-slate-200">
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
