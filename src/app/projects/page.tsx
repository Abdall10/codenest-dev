"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Sparkles, 
  ExternalLink, 
  Code2, 
  ArrowLeft, 
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
  Zap
} from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/portfolioData";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filterOptions = ["ALL", "Fullstack SaaS", "Enterprise Systems", "Edge PWA", "Technical Shorts"];

  const filteredProjects = activeFilter === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#070B19] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">
      {/* Background Cyber Glow Blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[600px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[400px] bg-purple-600/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 pt-4 space-y-12">
        <Navbar />

        <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
          
          {/* Top Header */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Overview
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Production Engineering & Architecture
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  Software Engineering Showcase
                </h1>
                <p className="text-sm text-slate-400 mt-2 max-w-xl">
                  Explore fullstack SaaS platforms, serverless edge architectures, enterprise CMS, and systems engineering modules.
                </p>
              </div>

              {/* Dynamic Filter Pills */}
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {filterOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setActiveFilter(opt)}
                    className={`px-3.5 py-1.5 rounded-xl border transition-all cursor-pointer ${
                      activeFilter === opt
                        ? "bg-cyan-500 text-black font-bold border-cyan-400 shadow-lg shadow-cyan-500/25"
                        : "bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((p) => {
              const isFlagship = p.featured;

              return (
                <div
                  key={p.id}
                  className={`group relative rounded-3xl bg-slate-900/60 border ${
                    isFlagship 
                      ? "border-cyan-500/40 bg-gradient-to-br from-slate-900/90 via-[#0b1226]/80 to-slate-950 shadow-xl shadow-cyan-500/5" 
                      : "border-slate-800/80 hover:border-slate-700"
                  } p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between`}
                >
                  {/* Glowing Hover Aura */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative space-y-4">
                    {/* Badge & Metadata */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-500">{p.id}</span>
                        {p.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                            {p.badge}
                          </span>
                        )}
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {p.desc}
                    </p>

                    {/* Engineering Highlights */}
                    {p.highlights && (
                      <div className="pt-2 space-y-2">
                        <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                          Architecture Highlights:
                        </div>
                        <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-400 font-mono">
                          {p.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {p.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Status & CTAs */}
                  <div className="relative mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                      <span>{p.metrics}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      {p.githubUrl && p.githubUrl !== "#" && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                          title="View Repository"
                        >
                          <Code2 className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all shadow-md shadow-cyan-500/20"
                      >
                        <span>{p.category === "Technical Shorts" ? "Watch Shorts" : "Live Demo"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        <Footer />
      </div>
    </main>
  );
}