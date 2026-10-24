import React from "react";
import Link from "next/link";
import { CopyButton } from "./CopyButton";
import { HeroIllustration } from "./HeroIllustration";
import { ArrowRight, Github, Terminal, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-4 sm:px-6 pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#EAE5E3] bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {/* Top Split: Narrative & Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Product Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Crimson Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] border border-[#F9C0C3] text-xs font-mono">
              <span className="size-2 rounded-full bg-[#800E13]" />
              <span className="font-semibold text-[#800E13]">OPEN-SOURCE PYTHON CLI</span>
              <span className="text-[#F18F95]">•</span>
              <span className="text-[#640D14] font-medium">v0.1.0 on PyPI</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#250902] leading-[1.1]">
              See the problem.{" "}
              <span className="text-[#800E13]">Understand the cause.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#655B5B] leading-relaxed max-w-2xl font-normal font-sans">
              Dextora helps developers diagnose project setup, dependency, and environment
              issues through a focused command-line workflow.
            </p>

            {/* Action Bar & Copyable Install */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Deep Charcoal Code Pill */}
              <div className="flex items-center bg-[#250902] text-white rounded-lg px-3.5 py-2.5 font-mono text-xs sm:text-sm shadow-subtle border border-[#38040E]">
                <span className="text-[#AD2831] font-bold mr-2 select-none">$</span>
                <code className="select-all grow mr-3 text-zinc-100 font-semibold">
                  pip install dextora
                </code>
                <CopyButton
                  text="pip install dextora"
                  className="text-[#F9C0C3]/70 hover:text-white"
                />
              </div>

              {/* Primary CTA Button */}
              <Link
                href="#quickstart"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#800E13] hover:bg-[#640D14] text-white font-semibold text-xs sm:text-sm transition-all shadow-crimson"
              >
                <span>Get Started</span>
                <ArrowRight className="size-3.5" />
              </Link>

              {/* GitHub Button */}
              <a
                href="https://github.com/TanishJain13/Dextora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#EAE5E3] bg-[#F7F4F3] hover:bg-[#EAE5E3] text-[#250902] font-medium text-xs sm:text-sm transition-colors"
              >
                <Github className="size-3.5 text-[#800E13]" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Publication Integrity Tag */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#655B5B] pt-1">
              <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
              <span>Python &ge; 3.11</span>
              <span>•</span>
              <span>MIT Licensed</span>
              <span>•</span>
              <span>100% Read-Only</span>
            </div>
          </div>

          {/* Right Column: Original Editorial Owl Illustration (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroIllustration />
          </div>
        </div>

        {/* The 3 Questions Diagnostic Dissection Panel */}
        <div className="border border-[#EAE5E3] rounded-2xl bg-[#F7F4F3] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-subtle">
          {/* Question 1 */}
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-[#EAE5E3] pb-5 md:pb-0 md:pr-6">
            <div className="text-[11px] font-mono font-bold text-[#800E13] uppercase tracking-wider flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-[#800E13]" />
              <span>01 / What is broken?</span>
            </div>
            <h3 className="font-bold text-sm text-[#250902]">
              Precise Rule Identification
            </h3>
            <p className="text-xs text-[#655B5B] leading-relaxed font-sans">
              Maps directory states to verified diagnostic codes (<code className="text-[#800E13] font-mono font-semibold">PY001</code>, <code className="text-[#800E13] font-mono font-semibold">ENV001</code>, <code className="text-[#800E13] font-mono font-semibold">GIT003</code>) with exact file evidence.
            </p>
          </div>

          {/* Question 2 */}
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-[#EAE5E3] pb-5 md:pb-0 md:pr-6">
            <div className="text-[11px] font-mono font-bold text-[#800E13] uppercase tracking-wider flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-[#800E13]" />
              <span>02 / Why is it happening?</span>
            </div>
            <h3 className="font-bold text-sm text-[#250902]">
              Root-Cause Correlation
            </h3>
            <p className="text-xs text-[#655B5B] leading-relaxed font-sans">
              Separates primary causal events (e.g. merge conflict markers) from cascading symptoms (e.g. invalid TOML syntax in pyproject.toml).
            </p>
          </div>

          {/* Question 3 */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono font-bold text-[#800E13] uppercase tracking-wider flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-[#800E13]" />
              <span>03 / How do I fix it?</span>
            </div>
            <h3 className="font-bold text-sm text-[#250902]">
              Deterministic Remediation
            </h3>
            <p className="text-xs text-[#655B5B] leading-relaxed font-sans">
              Emits tailored shell commands customized for your package manager (pip, poetry, pipenv, npm, pnpm, bun) without altering files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
