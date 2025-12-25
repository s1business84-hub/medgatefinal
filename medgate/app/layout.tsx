import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "MedGate - Medical Training Platform",
  description: "Find clinical observerships and electives in the UAE — requirements, availability, and applications in one place.",
  keywords: ["medical", "training", "observership", "electives", "UAE", "healthcare"],
  authors: [{ name: "MedGate Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
