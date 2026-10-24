"use client";

import React, { useState } from "react";
import { Search, AlertTriangle, GitFork, CheckCircle, ArrowRight, Terminal } from "lucide-react";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: "01",
      title: "Inspect the project",
      subtitle: "Deterministic Boundary Traversal",
      desc: "Dextora scans the project root to locate project manifests (pyproject.toml, requirements.txt, package.json), identifies virtual environment symlinks, and checks version control state without modifying scanned files.",
      icon: Search,
      technicalNote: "Stat cache pass completes in < 15ms. Excludes .git, node_modules, and cache trees.",
      inputLabel: "Project Root",
      outputLabel: "Discovered State",
      codeSnippet: "dextora doctor .",
    },
    {
      number: "02",
      title: "Surface diagnostic findings",
      subtitle: "Multi-Domain Rule Engine",
      desc: "Evaluates rules across 6 verified domains: virtual environments (PY), dependency lockfiles (DEP), environment templates (ENV), Git repository state (GIT), JavaScript manifests (JS), and project structure (STR).",
      icon: AlertTriangle,
      technicalNote: "Every finding maps to a stable code (e.g. PY001, ENV002, GIT003) with line numbers.",
      inputLabel: "AST & Manifests",
      outputLabel: "Diagnostic Code Matches",
      codeSnippet: ">>> 3 findings detected [PY001, ENV001, GIT003]",
    },
    {
      number: "03",
      title: "Understand the cause",
      subtitle: "Causal Graph & Root-Cause Grouping",
      desc: "Rather than dumping disconnected errors, Dextora identifies causal relationships. It isolates root triggers (like unresolved Git conflicts) from cascading downstream parser exceptions with confirmed confidence levels.",
      icon: GitFork,
      technicalNote: "Separates primary root cause from cascading symptoms deterministically.",
      inputLabel: "Isolated Findings",
      outputLabel: "Causal Tree Root",
      codeSnippet: "Causal Link: GIT005 -> DEP006 (Cascading syntax error)",
    },
    {
      number: "04",
      title: "Review suggested actions",
      subtitle: "Context-Aware Remediation",
      desc: "Emits copy-ready shell commands customized for your detected package manager (pip, poetry, pipenv, npm, pnpm, bun) or flags complex migrations that require human architectural review.",
      icon: CheckCircle,
      technicalNote: "Safe, non-destructive recommendations. Never executes commands automatically.",
      inputLabel: "Root Cause Finding",
      outputLabel: "Verified Shell Command",
      codeSnippet: "Fix: git rm --cached .env && echo .env >> .gitignore",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 px-4 sm:px-6 bg-[#FFFFFF] border-b border-[#EAE5E3]">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EAE5E3]">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#800E13] font-semibold">
              <span className="size-1.5 rounded-full bg-[#800E13]" />
              <span>Diagnostic Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#250902] tracking-tight font-sans">
              How Dextora works.
            </h2>
            <p className="text-sm md:text-base text-[#655B5B] font-sans leading-relaxed pt-1">
              A four-stage deterministic pipeline transforming unorganized codebase anomalies into verified, safe remediations.
            </p>
          </div>

          <div className="text-xs font-mono text-[#800E13] bg-[#FDF2F2] border border-[#F9C0C3] px-3 py-1.5 rounded-full shrink-0">
            [4-Stage Deterministic Pipeline]
          </div>
        </div>

        {/* =================================================================
            TECHNICAL PIPELINE DIAGRAM
            Crisp vector connecting path with small crimson markers (#800E13)
           ================================================================= */}
        <div className="hidden lg:block relative py-6">
          {/* Horizontal Connecting Vector Path */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-[#EAE5E3] z-0">
            {/* Active Progress Marker */}
            <div
              className="h-full bg-gradient-to-r from-[#800E13] via-[#AD2831] to-[#800E13] transition-all duration-500 rounded-full"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Stepper Nodes */}
          <div className="grid grid-cols-4 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center group focus:outline-none"
                >
                  {/* Node Circle */}
                  <div
                    className={`size-16 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 ${
                      isActive
                        ? "bg-[#250902] border-[#800E13] text-white shadow-crimson scale-105"
                        : isPast
                        ? "bg-[#800E13] border-[#800E13] text-white"
                        : "bg-white border-[#EAE5E3] text-[#655B5B] hover:border-[#800E13]/40 hover:bg-[#FDF2F2]"
                    }`}
                  >
                    <Icon className="size-6" />
                  </div>

                  {/* Marker Pin & Step Label */}
                  <div className="mt-4 space-y-1">
                    <span
                      className={`text-xs font-mono font-bold tracking-wider uppercase block ${
                        isActive ? "text-[#800E13]" : "text-[#655B5B]"
                      }`}
                    >
                      {step.number} — {step.title}
                    </span>
                    <span className="text-[11px] font-mono text-[#655B5B]/80 block">
                      {step.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown (Desktop Interactive Panel) */}
        <div className="border border-[#EAE5E3] rounded-2xl bg-[#F7F4F3] p-6 sm:p-8 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#800E13] text-white font-mono text-xs font-bold">
                STAGE {steps[activeStep].number}
              </span>
              <span className="text-xs font-mono text-[#800E13] font-semibold">
                {steps[activeStep].subtitle}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#250902] font-sans">
              {steps[activeStep].title}
            </h3>

            <p className="text-sm text-[#655B5B] font-sans leading-relaxed">
              {steps[activeStep].desc}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#250902] bg-white p-3 rounded-xl border border-[#EAE5E3]">
              <span className="size-2 rounded-full bg-[#800E13] shrink-0" />
              <span className="text-[11px] font-medium text-[#655B5B]">
                {steps[activeStep].technicalNote}
              </span>
            </div>
          </div>

          {/* Right Terminal Demonstration (5 cols - Deep Charcoal Surface) */}
          <div className="lg:col-span-5 bg-[#250902] text-white p-5 rounded-xl border border-[#38040E] space-y-3 font-mono text-xs shadow-terminal">
            <div className="flex items-center justify-between border-b border-[#38040E] pb-2 text-[10px] text-[#F9C0C3]/70">
              <span className="flex items-center gap-1.5">
                <Terminal className="size-3 text-[#AD2831]" />
                <span>dextora-engine ~ stage {steps[activeStep].number}</span>
              </span>
              <span className="text-[#AD2831] font-bold">OFFLINE</span>
            </div>

            <div className="space-y-1 text-zinc-300 py-1">
              <div className="text-[10px] text-[#F9C0C3]/60 uppercase">Pipeline Execution:</div>
              <div className="text-white font-semibold">
                $ {steps[activeStep].codeSnippet}
              </div>
            </div>

            <div className="pt-2 border-t border-[#38040E] flex items-center justify-between text-[11px] text-[#F9C0C3]/70">
              <span>Input: {steps[activeStep].inputLabel}</span>
              <span>&rarr;</span>
              <span className="text-emerald-400 font-semibold">{steps[activeStep].outputLabel}</span>
            </div>
          </div>
        </div>

        {/* Mobile View: Vertical Step Sequence (Reflowed cleanly for mobile < 1024px) */}
        <div className="lg:hidden space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="border border-[#EAE5E3] rounded-xl bg-white p-5 space-y-3 shadow-subtle"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-[#FDF2F2] border border-[#F9C0C3] flex items-center justify-center text-[#800E13] shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#800E13] uppercase block">
                      Stage {step.number}
                    </span>
                    <h4 className="font-bold text-sm text-[#250902]">{step.title}</h4>
                  </div>
                </div>

                <p className="text-xs text-[#655B5B] leading-relaxed font-sans">
                  {step.desc}
                </p>

                <div className="p-2.5 rounded-lg bg-[#250902] text-white font-mono text-xs">
                  <span className="text-[#AD2831]">$ </span>
                  <span className="text-zinc-200">{step.codeSnippet}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
