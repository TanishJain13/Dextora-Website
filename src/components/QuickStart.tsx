"use client";

import React, { useState } from "react";
import { CopyButton } from "./CopyButton";
import Link from "next/link";
import { Terminal, ShieldCheck, ArrowRight, Check } from "lucide-react";

export function QuickStart() {
  const [activeTab, setActiveTab] = useState<"install" | "doctor" | "init" | "ci">("install");

  const steps = {
    install: {
      number: "01",
      step: "Installation",
      title: "Install the standalone Python executable",
      desc: "Requires Python >= 3.11. Installs the zero-overhead dextora binary directly into your environment path.",
      command: "pip install dextora",
      hint: "Tip: Test without global install using: python -m dextora --version",
      outputTag: "Verified with Python 3.11 & 3.12",
    },
    doctor: {
      number: "02",
      step: "Diagnosis",
      title: "Inspect your active repository",
      desc: "Executes 6 diagnostic suites in milliseconds. Fully read-only, offline, and non-destructive.",
      command: "dextora doctor .",
      hint: "Target specific paths: dextora doctor /path/to/subproject",
      outputTag: "Average execution time: < 45ms",
    },
    init: {
      number: "03",
      step: "Configuration",
      title: "Generate local threshold rules",
      desc: "Creates a .dextora.toml file to ignore specific codes or adjust strictness boundaries across your team.",
      command: "dextora init",
      hint: "To overwrite an existing configuration explicitly: dextora init --force",
      outputTag: "Zero telemetry • Local to repo",
    },
    ci: {
      number: "04",
      step: "Automation",
      title: "Gate pull requests in CI pipelines",
      desc: "Emit structured JSON and exit with status code 1 on any warning or error to prevent broken setups from merging.",
      command: "dextora doctor . --strict --json",
      hint: "Plug directly into GitHub Actions, GitLab CI, or pre-commit hooks.",
      outputTag: "Machine-readable exit codes (0/1)",
    },
  };

  const current = steps[activeTab];

  return (
    <section id="quickstart" className="py-20 md:py-28 px-4 sm:px-6 bg-[#FFFFFF] border-b border-[#EAE5E3]">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EAE5E3]">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#800E13] font-semibold">
              <span className="size-1.5 rounded-full bg-[#800E13]" />
              <span>Quick-Start Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#250902] tracking-tight font-sans">
              From zero to verified in seconds.
            </h2>
          </div>
          <p className="text-sm text-[#250902]/70 max-w-md font-sans leading-relaxed">
            Standard Python packaging. No daemons, no background workers, no account creation. Just run and inspect.
          </p>
        </div>

        {/* Interactive Stepper Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selectors */}
          <div className="lg:col-span-5 space-y-2.5">
            {(Object.keys(steps) as Array<keyof typeof steps>).map((key) => {
              const item = steps[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                    isActive
                      ? "bg-[#FDF2F2] border-[#800E13] shadow-subtle"
                      : "bg-[#F7F4F3] border-[#EAE5E3] hover:bg-white hover:border-[#800E13]/30 text-[#250902]/70"
                  }`}
                >
                  <span
                    className={`font-mono text-xs px-2.5 py-1 rounded font-bold transition-colors ${
                      isActive
                        ? "bg-[#800E13] text-white"
                        : "bg-white text-[#250902]/60 border border-[#EAE5E3]"
                    }`}
                  >
                    {item.number}
                  </span>
                  <div className="space-y-0.5">
                    <div
                      className={`text-sm font-bold transition-colors ${
                        isActive ? "text-[#800E13]" : "text-[#250902]"
                      }`}
                    >
                      {item.step}
                    </div>
                    <div className="text-xs text-[#250902]/60 font-sans line-clamp-1">
                      {item.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep Charcoal Terminal Command View (Part of 10% Contrast Guidance) */}
          <div className="lg:col-span-7 bg-[#250902] rounded-2xl border border-[#38040E] p-6 sm:p-7 text-white shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#38040E] pb-4">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#640D14]" />
                <span className="size-2.5 rounded-full bg-[#800E13]" />
                <span className="size-2.5 rounded-full bg-[#AD2831]" />
                <span className="ml-2 font-mono text-[11px] text-[#F9C0C3]/70">
                  dextora ~ step {current.number}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#F9C0C3] bg-[#38040E] border border-[#640D14] px-2.5 py-0.5 rounded font-semibold">
                {current.outputTag}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* Command Display */}
            <div className="p-4 rounded-xl bg-black/50 border border-[#38040E] flex items-center justify-between gap-4 font-mono text-sm">
              <div className="flex items-center gap-3 overflow-x-auto py-0.5">
                <span className="text-[#AD2831] font-bold select-none">$</span>
                <span className="text-white font-semibold select-all">
                  {current.command}
                </span>
              </div>
              <CopyButton
                text={current.command}
                className="bg-[#640D14] hover:bg-[#800E13] text-white px-3 py-1.5 rounded text-xs shrink-0"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs text-[#F9C0C3]/70 font-mono">
              <div className="text-[11px]">
                {current.hint}
              </div>
              <Link
                href="/docs"
                className="inline-flex items-center gap-1 text-[#F9C0C3] hover:text-white font-sans text-xs transition-colors shrink-0 font-medium"
              >
                <span>Read CLI specs</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
