"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { createUser, getCurrentUser } from "@/lib/storage";
import { LiquidParallax } from "@/components/ui/liquid-parallax";

function sendWelcomeEmail(email: string, name: string) {
  // In production, this would call an API endpoint to send email via backend
  // For now, we'll log the email details (placeholder for actual implementation)
  const welcomeEmailContent = {
    from: "hellomedgate@gmail.com",
    to: email,
    subject: "Welcome to MedGate - Your Journey Begins Here",
    body: `
Dear ${name},

Welcome to MedGate! 🎉

Thank you for joining our platform as an early access member. We're excited to have you as part of the MedGate community.

As a pilot phase member, you'll be among the first to:
• Access clinical observership and elective opportunities in the UAE
• Receive priority notifications when new programs are listed
• Connect with leading healthcare institutions
• Get updates on platform features and improvements

What's Next?
1. Complete your student profile when program listings go live
2. Browse available opportunities across UAE medical facilities
3. Submit applications directly through our platform
4. Track your application status in real-time

We're currently in the pilot phase, actively working with hospitals to bring you quality clinical training opportunities. You'll receive an email notification as soon as programs become available for application.

If you have any questions or need assistance, feel free to reach out to us at hellomedgate@gmail.com.

Best regards,
The MedGate Team

---
This is an automated message from MedGate. Please do not reply to this email.
    `
  };
  
  console.log("Welcome email would be sent:", welcomeEmailContent);
  
  // TODO: Implement actual email sending via API route
  // Example: fetch('/api/send-email', { method: 'POST', body: JSON.stringify(welcomeEmailContent) })
}

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
      
      // Send welcome email for student accounts
      if (role === "student") {
        sendWelcomeEmail(email, name);
      }
      
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
