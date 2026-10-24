"use client";

import React, { useState } from "react";
import { DEMO_SCENARIOS, DemoScenario } from "@/lib/demo-scenarios";
import { CopyButton } from "./CopyButton";
import { Terminal, Shield, ArrowRight } from "lucide-react";

export function TerminalConsole() {
  const [activeId, setActiveId] = useState<string>("issues-detected");

  const currentScenario: DemoScenario =
    DEMO_SCENARIOS.find((s) => s.id === activeId) || DEMO_SCENARIOS[0];

  return (
    <section id="cli-console" className="py-20 md:py-28 px-4 sm:px-6 bg-[#FFFFFF] border-b border-[#EAE5E3]">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#EAE5E3]">
          <div className="space-y-2 max-w-xl">
            <div className="text-xs font-mono font-bold text-[#800E13] uppercase tracking-wider flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-[#800E13]" />
              <span>Authentic CLI Console</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#250902] tracking-tight font-sans">
              Deterministic terminal reporting.
            </h2>
            <p className="text-[#250902]/70 text-sm font-sans leading-relaxed">
              Dextora operates locally on your repository with zero background network queries. Below is a faithful demonstration of its terminal reporting and exit codes.
            </p>
          </div>

          <div className="text-xs font-mono text-[#800E13] bg-[#FDF2F2] border border-[#F9C0C3] px-3 py-1 rounded-full shrink-0">
            [Sample Demonstration • Verified CLI Schema]
          </div>
        </div>

        {/* Deep Charcoal Terminal Window (10% Deep Charcoal for High Contrast) */}
        <div className="border border-[#38040E] rounded-2xl bg-[#250902] text-zinc-100 overflow-hidden shadow-terminal">
          {/* Terminal Title Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 sm:px-5 py-3 bg-[#1b0601] border-b border-[#38040E] text-xs font-mono gap-3">
            <div className="flex items-center gap-2.5">
              <span className="size-2.5 rounded-full bg-[#640D14]" />
              <span className="size-2.5 rounded-full bg-[#800E13]" />
              <span className="size-2.5 rounded-full bg-[#AD2831]" />
              <span className="text-[#F9C0C3]/70 ml-1">dextora-console ~ v0.1.0</span>
            </div>

            {/* Scenario Switcher Tabs */}
            <div className="flex items-center gap-1 bg-[#250902] p-1 rounded-lg border border-[#38040E] overflow-x-auto">
              {DEMO_SCENARIOS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  type="button"
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all whitespace-nowrap ${
                    activeId === s.id
                      ? "bg-[#800E13] text-white font-bold shadow-sm"
                      : "text-[#F9C0C3]/70 hover:text-white hover:bg-[#38040E]"
                  }`}
                >
                  {s.command}
                </button>
              ))}
            </div>
          </div>

          {/* Active Command Bar */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 bg-[#250902] border-b border-[#38040E] text-xs font-mono">
            <div className="flex items-center gap-2 overflow-x-auto py-0.5">
              <span className="text-[#AD2831] font-bold select-none">$</span>
              <span className="text-white select-all font-semibold">
                {currentScenario.command}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <CopyButton
                text={currentScenario.command}
                label="Copy Command"
                className="px-2.5 py-1 rounded bg-[#38040E] hover:bg-[#640D14] text-[#FDE5E6] text-[11px] border border-[#640D14]"
              />
              <CopyButton
                text={currentScenario.content}
                label="Copy Output"
                className="px-2.5 py-1 rounded bg-[#38040E] hover:bg-[#640D14] text-[#FDE5E6] text-[11px] border border-[#640D14]"
              />
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-zinc-200 min-h-[340px] max-h-[500px] overflow-y-auto selection:bg-[#800E13] selection:text-white">
            {currentScenario.isJson ? (
              <pre className="text-emerald-400 font-mono whitespace-pre">
                {currentScenario.content}
              </pre>
            ) : (
              <pre className="font-mono whitespace-pre text-zinc-200">
                {renderTerminalLines(currentScenario.content)}
              </pre>
            )}
          </div>

          {/* Terminal Bottom Status Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 sm:px-5 py-2.5 bg-[#1b0601] border-t border-[#38040E] text-[11px] font-mono text-[#F9C0C3]/70 gap-2">
            <div className="flex items-center gap-3">
              <span>Target: {currentScenario.targetPath}</span>
              <span>•</span>
              <span>Type: {currentScenario.projectType}</span>
            </div>

            <div className="flex items-center gap-3">
              <span>
                Exit Code:{" "}
                <strong className={currentScenario.exitCode === 0 ? "text-emerald-400" : "text-[#AD2831]"}>
                  {currentScenario.exitCode}
                </strong>
              </span>
              <span>•</span>
              <span>Checks: {currentScenario.checksRun}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderTerminalLines(text: string): React.ReactNode {
  return text.split("\n").map((line, idx) => {
    if (
      line.startsWith("+---") ||
      line.startsWith("| Dextora") ||
      line.startsWith("| Target:") ||
      line.startsWith("| Project Type:") ||
      line.startsWith("| Checks Run:")
    ) {
      return (
        <span key={idx} className="text-zinc-400 font-semibold block">
          {line}
        </span>
      );
    }
    if (line.includes(">>> ERRORS")) {
      return (
        <span key={idx} className="text-[#AD2831] font-bold block pt-2">
          {line}
        </span>
      );
    }
    if (line.includes(">>> WARNINGS")) {
      return (
        <span key={idx} className="text-amber-400 font-bold block pt-2">
          {line}
        </span>
      );
    }
    if (line.includes(">>> SUCCESSES")) {
      return (
        <span key={idx} className="text-emerald-400 font-bold block pt-2">
          {line}
        </span>
      );
    }
    if (line.includes(">>> ROOT CAUSE ANALYSIS")) {
      return (
        <span key={idx} className="text-[#F9C0C3] font-bold block pt-2">
          {line}
        </span>
      );
    }
    if (
      line.startsWith("[PY") ||
      line.startsWith("[ENV") ||
      line.startsWith("[STR") ||
      line.startsWith("[GIT") ||
      line.startsWith("[DEP") ||
      line.startsWith("[JS")
    ) {
      const isError = line.includes("GIT003") || line.includes("DEP002") || line.includes("JS001");
      const isSuccess =
        line.includes("STR002") ||
        line.includes("PY000") ||
        line.includes("ENV000") ||
        line.includes("JS000") ||
        line.includes("ENV004");
      const color = isError ? "text-[#AD2831]" : isSuccess ? "text-emerald-400" : "text-amber-300";
      return (
        <span key={idx} className={`${color} font-bold block pt-1`}>
          {line}
        </span>
      );
    }
    if (line.includes("Fix:")) {
      return (
        <span key={idx} className="text-zinc-300 block">
          <span className="text-[#F9C0C3]/60">  Fix:      </span>
          <span className="text-emerald-400 font-semibold">{line.replace("  Fix:      ", "")}</span>
        </span>
      );
    }
    if (line.includes("Command:")) {
      return (
        <span key={idx} className="text-[#F9C0C3] font-semibold block">
          {line}
        </span>
      );
    }
    if (line.includes("[!]")) {
      return (
        <span key={idx} className="text-amber-400 font-bold block pt-2">
          {line}
        </span>
      );
    }
    if (line.includes("[✔]")) {
      return (
        <span key={idx} className="text-emerald-400 font-bold block pt-2">
          {line}
        </span>
      );
    }
    if (line.includes("[X]")) {
      return (
        <span key={idx} className="text-[#AD2831] font-bold block pt-2">
          {line}
        </span>
      );
    }

    return (
      <span key={idx} className="block text-zinc-300">
        {line || "\u00A0"}
      </span>
    );
  });
}
