import React from "react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-900 text-center text-xs font-mono text-slate-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} {personalInfo.brand}. Engineered for Developers.</div>
        <div className="text-slate-600">Built with Next.js, Tailwind CSS & Clean Modular Architecture</div>
      </div>
    </footer>
  );
}