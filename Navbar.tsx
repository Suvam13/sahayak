"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if link is active
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="px-0 py-4 flex justify-between items-center" style={{ backgroundColor: "#8BF3AF" }}>
      <div style={{ marginLeft: 100, marginRight: 100 }} className="flex justify-between items-center w-full">
        {/* Logo + Brand Name */}
        <Link href="/dashboard" className="flex items-center space-x-3">
          <span className="text-lg" style={{ fontSize: 32 }}>Sahayak</span>
          <Image 
            src="/2.png"
            alt="Sahayak Logo"
            width={50}
            height={50}
          />
          
        </Link>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        {/* Navigation Links */}
        <div className={`space-x-6 md:flex ${menuOpen ? "flex flex-col absolute top-20 left-0 w-full bg-green-200 p-4 z-10" : "hidden"} md:static md:space-x-6 md:items-center`}>
          <Link
            href="/dashboard"
            className={`block py-2 md:py-0 ${isActive("/dashboard") ? "font-bold text-black-700" : ""}`}
          >
            Dashboard
          </Link>
          <Link
            href="/history"
            className={`block py-2 md:py-0 ${isActive("/history") ? "font-bold text-black-700" : ""}`}
          >
            History
          </Link>
          <Link
            href="/location"
            className={`block py-2 md:py-0 ${isActive("/location") ? "font-bold text-black-700" : ""}`}
          >
            Live Location
          </Link>
          <Link
            href="/settings"
            className={`block py-2 md:py-0 ${isActive("/settings") ? "font-bold text-black-700" : ""}`}
          >
            Settings
          </Link>
          <Link
            href="/live_stats"
            className={`block py-2 md:py-0 ${isActive("/live_stats") ? "font-bold text-black-700" : ""}`}
          >
            Live Stats
          </Link>
          <Link
            href="/"
            className={`block md:hidden py-2 ${isActive("/") ? "font-bold text-black-700" : ""}`}
          >
            👤
          </Link>
        </div>

        {/* User Icon */}
        <Link
          href="/"
          className={`hidden md:block text-3xl ${isActive("/") ? "font-bold text-black-700" : ""}`}
        >
          👤
        </Link>
      </div>
    </nav>
  );
}