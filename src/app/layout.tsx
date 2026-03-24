import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email Templates Hub",
  description: "A fast, minimal, and scalable website for business email templates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col`}>
        <header className="border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-8 py-5">
            <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 transition-colors hover:text-gray-600">
              Email Templates Hub
            </Link>
          </div>
        </header>
        <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-16 w-full">
          {children}
        </main>
        <footer className="border-t border-gray-100 py-10 mt-16 text-center text-sm text-gray-500">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
              <Link href="/about" className="hover:text-gray-900 font-medium transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-gray-900 font-medium transition-colors">Contact</Link>
              <Link href="/privacy-policy" className="hover:text-gray-900 font-medium transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-900 font-medium transition-colors">Terms of Service</Link>
            </div>
            <p className="mb-2">
              For business inquiries: <a href="mailto:emailtemplateshub@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">emailtemplateshub@gmail.com</a>
            </p>
            <p className="text-gray-400 mt-4">&copy; {new Date().getFullYear()} Email Templates Hub. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
