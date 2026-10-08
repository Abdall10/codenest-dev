"use client";

import React from "react";
import { Cpu } from "lucide-react";
import { skills } from "@/data/portfolioData";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="space-y-2 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
          <Cpu className="w-4 h-4" /> Engineering Expertise
        </div>
        <h2 className="text-3xl font-extrabold text-white">Skills & Core Technologies</h2>
        <p className="text-sm text-slate-400">Specialized technical focus for software systems and performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((s, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 backdrop-blur-md transition-all space-y-3"
          >
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-slate-200">{s.name}</span>
              <span className="font-mono text-xs text-cyan-400 font-bold">{s.level}%</span>
            </div>
            
            {/* Progress Bar with Gradient */}
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${s.color} transition-all duration-700`}
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}