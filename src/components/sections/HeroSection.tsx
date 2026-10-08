"use client";

import React, { useState } from "react";
import { Sparkles, Play, Terminal, ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function HeroSection() {
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const testCode = () => {
    setLoading(true);
    setOutput(null);
    setTimeout(() => {
      setOutput(">> Output: 5 7 [Post-inc yields first, pre-inc mutates first]");
      setLoading(false);
    }, 400);
  };

  return (
    <section className="relative pt-12 pb-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Headline & Bio */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-sm shadow-cyan-500/10">
            <Sparkles className="w-3.5 h-3.5" /> High-Retention Tech Content
          </div>

          <div className="space-y-2">
            <p className="text-sm font-mono text-cyan-400 tracking-wider uppercase">Hello, I'm</p>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {personalInfo.name}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                ({personalInfo.brand})
              </span>
            </h1>
            <p className="text-lg text-slate-300 font-medium">
              {personalInfo.title}
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
            >
              Explore Series <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white font-medium text-sm transition-all cursor-pointer"
            >
              Let's Talk
            </a>
          </div>

          {/* Quick Stats Pill */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 max-w-lg">
            {personalInfo.stats.map((stat, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-xs text-slate-400">{stat.label}</div>
                <div className="text-sm font-bold text-white font-mono mt-0.5">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Glowing Code Avatar Card */}
        <div className="lg:col-span-5 relative">
          {/* Neon Ring Halo */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 opacity-30 blur-2xl animate-pulse" />
          
          <div className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Terminal className="w-4 h-4" />
                <span>codenest_core.cpp</span>
              </div>
              <button
                onClick={testCode}
                disabled={loading}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all disabled:opacity-50 cursor-pointer"
              >
                <Play className="w-3 h-3 fill-black" />
                {loading ? "Testing..." : "Execute"}
              </button>
            </div>

            {/* Code Body */}
            <pre className="font-mono text-xs leading-relaxed text-slate-300 p-4 rounded-2xl bg-black/70 border border-slate-800/60 overflow-x-auto">
              <code>{`#include <iostream>

int main() {
    int x = 5;
    std::cout << x++ << " ";
    std::cout << ++x;
    return 0;
}`}</code>
            </pre>

            {output && (
              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/50 text-xs font-mono text-cyan-300 animate-in fade-in duration-200">
                {output}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}