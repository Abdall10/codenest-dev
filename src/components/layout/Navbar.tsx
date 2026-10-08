"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Video, Play, Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4">
      <nav className="relative flex items-center justify-between px-5 sm:px-6 py-3.5 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 shadow-2xl shadow-black/50">
        
        {/* Brand with Logo Image */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 rounded-xl overflow-hidden border border-cyan-500/40 shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform bg-slate-950">
            <Image
              src="/logo.svg"
              alt={personalInfo.brand}
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="font-bold tracking-tight text-white font-mono text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
            {personalInfo.brand}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <Link href="/#about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Link href="/#skills" className="hover:text-cyan-400 transition-colors">Skills</Link>
          <Link href="/projects" className="hover:text-cyan-400 transition-colors">Series & Projects</Link>
          <Link href="/#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
        </div>

        {/* Desktop Social CTAs */}
        <div className="hidden md:flex items-center gap-2">
          {/* YouTube */}
          <a
            href={personalInfo.socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 text-xs font-semibold transition-all"
            title="YouTube Shorts"
          >
            <Video className="w-3.5 h-3.5" />
            <span>Shorts</span>
          </a>

          {/* TikTok */}
          <a
            href={personalInfo.socials.tiktok}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 text-xs font-semibold transition-all"
            title="TikTok"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>TikTok</span>
          </a>

          {/* Instagram */}
          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 p-2 px-3 py-1.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:bg-pink-500/20 text-xs font-semibold transition-all"
            title="Instagram"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/70 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-slate-800 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-300 border-b border-slate-800 pb-4">
            <Link 
              href="/#about" 
              onClick={closeMenu} 
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/#skills" 
              onClick={closeMenu} 
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              Skills
            </Link>
            <Link 
              href="/projects" 
              onClick={closeMenu} 
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              Series & Projects
            </Link>
            <Link 
              href="/#contact" 
              onClick={closeMenu} 
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Social Links inside Mobile Menu */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <a
              href={personalInfo.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold"
            >
              <Video className="w-3.5 h-3.5" />
              <span>Shorts</span>
            </a>
            <a
              href={personalInfo.socials.tiktok}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>TikTok</span>
            </a>
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Insta</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}