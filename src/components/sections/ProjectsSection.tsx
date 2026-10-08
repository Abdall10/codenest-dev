"use client";

import React from "react";
import { Layers, ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolioData";
import Link from "next/link";

export default function ProjectsSection() {
  // عرض أول 3 مشاريع رئيسية في الصفحة الأولى
  const featuredThree = projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Layers className="w-4 h-4" /> Featured Architecture
          </div>
          <h2 className="text-3xl font-extrabold text-white">Production Applications</h2>
          <p className="text-sm text-slate-400">Deployed SaaS platforms, edge systems, and full-stack solutions.</p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          <span>View All Projects & Series</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredThree.map((p) => (
          <div
            key={p.id}
            className="group relative rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/50 p-6 backdrop-blur-md flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 font-semibold">{p.id}</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-cyan-950/80 border border-cyan-800/50 text-cyan-300">
                  {p.badge || p.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                {p.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 font-semibold">{p.metrics}</span>
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-slate-400 group-hover:text-cyan-400 transition-colors"
              >
                <span>Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}