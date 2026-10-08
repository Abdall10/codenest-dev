"use client";

import React from "react";
import { Mail, MessageSquare, ArrowUpRight, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 max-w-4xl mx-auto text-center space-y-6">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800/80 backdrop-blur-xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-cyan-500/20 blur-[90px] pointer-events-none" />

        <div className="relative space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" /> Collaboration & Engineering Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Let's Build Something High-Impact</h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Looking for a production Fullstack SaaS architecture, Edge/Serverless deployment, or technical consulting?
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:abdallah.rafat@example.com"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all shadow-lg shadow-cyan-500/20"
            >
              <Mail className="w-4 h-4" /> Get in Touch
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-all"
            >
              Connect on LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono border border-slate-800 transition-all"
            >
              <Code2 className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}