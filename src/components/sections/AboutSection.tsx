"use client";

import React from "react";
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  CheckCircle, 
  Terminal, 
  Code2, 
  Layers, 
  Sparkles,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function AboutSection() {
  const experiences = [
    {
      role: "Freelance Full Stack Developer",
      period: "Sep 2024 - Present",
      points: [
        "Architecting production web apps using Next.js, React 19, and TypeScript with sub-second performance.",
        "Developing scalable backend APIs with Node.js, Express, and Serverless Cloudflare Workers.",
        "Engineering custom authentication flows, transactional credits systems, and Web Push notifications.",
        "Continuous deployment across Vercel and Cloudflare with zero-downtime database migrations.",
      ],
    },
  ];

  const coreStrengths = [
    "Full-Stack System Architecture (Next.js, Node.js, Edge)",
    "Clean Code, Modular Architecture & Design Patterns",
    "Database Modeling (PostgreSQL, Drizzle, Prisma, Neon)",
    "Performance Optimization, SEO & High Lighthouse Scores",
    "Deep CS Fundamentals (Data Structures, Algorithms, OOP)",
    "Payment Gateways & Authentication Workflows",
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Header Tag */}
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 text-xs font-mono">
          <User className="w-3.5 h-3.5" /> Engineering Profile & Background
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Turning Complex Ideas Into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            Scalable Reality
          </span>
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          Bridging the gap between robust Computer Science foundations and modern high-speed Full-Stack product development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Bio Card + Contact Info (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Story Card */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 p-7 backdrop-blur-xl shadow-xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[90px] pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
              <div>
                <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">{personalInfo.title}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap gap-3 pt-2 text-xs font-mono">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </span>
            </div>
          </div>

          {/* Professional Experience Card */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 p-7 backdrop-blur-xl space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
              <Briefcase className="w-4 h-4" /> Work Experience
            </div>

            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-base font-bold text-white">{exp.role}</h4>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 w-fit">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-slate-400">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Core Strengths (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Academic Background Card */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900/80 to-[#0b1226]/80 border border-indigo-500/30 p-7 backdrop-blur-xl shadow-xl space-y-4 relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-indigo-400" /> Academic Foundation
            </div>

            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">
                {personalInfo.education.degree}
              </h4>
              <p className="text-xs text-cyan-400 font-mono font-medium">
                {personalInfo.education.institution}
              </p>
              <div className="inline-block mt-1 text-[11px] font-mono text-indigo-300 bg-indigo-950/60 border border-indigo-800/40 px-2.5 py-0.5 rounded-md">
                {personalInfo.education.timeline}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed">
              <span className="text-slate-300 font-medium block mb-1">Key Curriculum Focus:</span>
              {personalInfo.education.focus}
            </div>
          </div>

          {/* Core Strengths Checklist */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 p-7 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> Architectural Competencies
            </div>

            <div className="space-y-2.5">
              {coreStrengths.map((str, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{str}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}