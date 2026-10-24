import React from "react";
import { AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function ProblemSolution() {
  const comparisons = [
    {
      symptom: "Mysterious ModuleNotFoundError on fresh clone",
      cause: "Virtualenv interpreter symlink points to deleted Python path (PY002)",
      resolution: "Re-binds runtime or specifies python3.11 -m venv .venv",
      code: "PY002",
    },
    {
      symptom: "Runtime 500 error on local test run",
      cause: "New keys declared in .env.example are missing from local .env (ENV002)",
      resolution: "Identifies exact missing keys without reading secret values",
      code: "ENV002",
    },
    {
      symptom: "Cascading TOMLDecodeError in pyproject.toml",
      cause: "Unmerged Git conflict markers (<<<<<<< HEAD) inside manifest (GIT005)",
      resolution: "Isolates git conflict as the true cause of syntax parser failure",
      code: "GIT005",
    },
    {
      symptom: "Accidental credential commit risk in Git index",
      cause: ".env exists locally but was omitted from .gitignore file (GIT002 / GIT003)",
      resolution: "git rm --cached .env && echo .env >> .gitignore",
      code: "GIT003",
    },
  ];

  return (
    <section id="problem-solution" className="py-20 md:py-28 px-4 sm:px-6 bg-[#F7F4F3] border-b border-[#EAE5E3]">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-3 pb-6 border-b border-[#EAE5E3]">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#800E13] font-semibold">
            <span className="size-1.5 rounded-full bg-[#800E13]" />
            <span>The Diagnostic Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#250902] tracking-tight font-sans">
            Unclear symptoms vs. structured diagnostic findings.
          </h2>
          <p className="text-sm md:text-base text-[#655B5B] font-sans leading-relaxed">
            Standard linters check code syntax inside individual files, but remain blind to environment drift, broken interpreter symlinks, and lockfile collisions. Dextora brings order to the workspace.
          </p>
        </div>

        {/* Editorial Contrast Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Common Unclear Symptoms (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#EAE5E3]">
              <span className="size-2 rounded-full bg-[#640D14]" />
              <span className="text-xs font-mono font-bold text-[#640D14] uppercase tracking-wider">
                Unclear Development Symptoms
              </span>
            </div>

            <div className="space-y-3">
              {comparisons.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#EAE5E3] space-y-1.5 shadow-subtle"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#640D14]">
                    <span>Symptom 0{idx + 1}</span>
                    <span className="text-[#AD2831] font-bold">Unclear Exception</span>
                  </div>
                  <h4 className="font-semibold text-sm text-[#250902] font-sans">
                    {item.symptom}
                  </h4>
                  <p className="text-xs text-[#655B5B] font-sans">
                    Often leads to hours of trial-and-error stackoverflow searches and redundant reinstalls.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Transition Divider (1 col on large screens) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center py-24">
            <div className="w-0.5 h-full bg-[#EAE5E3] relative">
              <div className="absolute top-1/2 -translate-y-1/2 -left-3 size-7 rounded-full bg-[#800E13] text-white flex items-center justify-center shadow-md">
                <ArrowRight className="size-3.5" />
              </div>
            </div>
          </div>

          {/* Right Column: Dextora Structured Findings (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#EAE5E3]">
              <span className="size-2 rounded-full bg-[#800E13]" />
              <span className="text-xs font-mono font-bold text-[#800E13] uppercase tracking-wider">
                Dextora Diagnostic Resolution
              </span>
            </div>

            <div className="space-y-3">
              {comparisons.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#250902] border border-[#38040E] text-white space-y-2 shadow-terminal"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#F9C0C3] font-bold flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-[#AD2831]" />
                      <span>[{item.code}] Root Cause</span>
                    </span>
                    <span className="text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded text-[10px]">
                      Deterministic
                    </span>
                  </div>

                  <p className="text-xs text-zinc-200 font-sans leading-relaxed">
                    {item.cause}
                  </p>

                  <div className="pt-1.5 border-t border-[#38040E] flex items-center justify-between text-[11px] font-mono text-[#F9C0C3]/90">
                    <span className="text-[#AD2831] font-bold">Fix:</span>
                    <code className="text-emerald-400 font-medium select-all truncate ml-2">
                      {item.resolution}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagnostic Principle Pill */}
        <div className="bg-white border border-[#EAE5E3] rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-subtle">
          <div className="space-y-1 max-w-xl">
            <div className="text-xs font-mono font-bold text-[#800E13] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-[#800E13]" />
              <span>Offline &amp; Non-Destructive</span>
            </div>
            <p className="text-xs sm:text-sm text-[#655B5B] font-sans leading-relaxed">
              Every diagnosis is computed locally in under 45ms. Dextora never modifies files during doctor scans, never sends telemetry, and never parses confidential credentials.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-[#F7F4F3] border border-[#EAE5E3] rounded-xl px-4 py-2 text-center font-mono">
              <div className="text-[10px] text-[#655B5B]">Execution Time</div>
              <div className="text-sm font-bold text-[#800E13]">&lt; 45ms</div>
            </div>
            <div className="bg-[#F7F4F3] border border-[#EAE5E3] rounded-xl px-4 py-2 text-center font-mono">
              <div className="text-[10px] text-[#655B5B]">File Mutations</div>
              <div className="text-sm font-bold text-emerald-700">0 (Read-Only)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
