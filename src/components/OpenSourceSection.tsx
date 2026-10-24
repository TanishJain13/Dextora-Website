import React from "react";
import { Github, FileText, GitPullRequest, ArrowRight, ExternalLink } from "lucide-react";
import { OwlLogo } from "./OwlLogo";

export function OpenSourceSection() {
  return (
    <section id="opensource" className="py-20 md:py-28 px-4 sm:px-6 bg-[#FFFFFF] border-b border-[#EAE5E3]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Signature Crimson Brand Moment Container */}
        <div className="bg-gradient-to-br from-[#800E13] via-[#640D14] to-[#38040E] text-white rounded-3xl border border-[#AD2831]/40 p-8 sm:p-12 shadow-crimson space-y-8 relative overflow-hidden">
          {/* Subtle Owl Brand Watermark in the background */}
          <div className="absolute right-[-10px] bottom-[-20px] opacity-10 pointer-events-none w-80 h-80 sm:w-96 sm:h-96">
            <OwlLogo size={360} variant="primary" theme="white" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-mono border border-white/20 font-medium">
                <Github className="size-3.5" />
                <span>Open Source • Permissive MIT License</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans leading-[1.15]">
                Built transparently for the Python developer community.
              </h2>

              <p className="text-[#FDE5E6] text-sm md:text-base leading-relaxed font-sans max-w-xl">
                Dextora is free, community-driven software published under the MIT license.
                Inspect the Python scanner source, propose new framework rules, add diagnostic tests,
                or contribute enhancements.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="relative flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://github.com/TanishJain13/Dextora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F7F4F3] text-[#800E13] font-bold text-sm transition-all shadow-md"
              >
                <Github className="size-4 text-[#800E13]" />
                <span>View on GitHub</span>
                <ArrowRight className="size-4 text-[#800E13]" />
              </a>

              <a
                href="https://pypi.org/project/dextora/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/25 bg-black/20 hover:bg-black/35 text-white font-medium text-sm transition-all"
              >
                <span>PyPI Release</span>
                <ExternalLink className="size-3.5 text-[#F9C0C3]" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-white/15">
            <a
              href="https://github.com/TanishJain13/Dextora"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-all flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono text-[#F9C0C3] uppercase tracking-wider">Repository</div>
                <div className="text-xs font-bold text-white group-hover:text-[#FDE5E6] transition-colors">
                  TanishJain13/Dextora
                </div>
              </div>
              <ArrowRight className="size-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href="https://github.com/TanishJain13/Dextora/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-all flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono text-[#F9C0C3] uppercase tracking-wider">License</div>
                <div className="text-xs font-bold text-white group-hover:text-[#FDE5E6] transition-colors">
                  MIT Permissive
                </div>
              </div>
              <FileText className="size-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href="https://github.com/TanishJain13/Dextora/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-all flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono text-[#F9C0C3] uppercase tracking-wider">Contribution</div>
                <div className="text-xs font-bold text-white group-hover:text-[#FDE5E6] transition-colors">
                  CONTRIBUTING.md
                </div>
              </div>
              <GitPullRequest className="size-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href="https://github.com/TanishJain13/Dextora/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-all flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono text-[#F9C0C3] uppercase tracking-wider">Issues &amp; Ideas</div>
                <div className="text-xs font-bold text-white group-hover:text-[#FDE5E6] transition-colors">
                  Issue Tracker
                </div>
              </div>
              <ArrowRight className="size-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
