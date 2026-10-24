"use client";

import React, { useState } from "react";
import {
  GitMerge,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Zap,
  FileCode2,
  ChevronDown,
  ChevronUp,
  Activity,
  Layers,
} from "lucide-react";
import { CopyButton } from "./CopyButton";

type CaseKey = "merge-conflict" | "staged-secrets" | "venv-drift";

interface DiagnosticCase {
  id: CaseKey;
  label: string;
  title: string;
  summary: string;
  latencyMs: number;
  symptoms: Array<{
    code: string;
    title: string;
    severity: "ERROR" | "WARNING";
    domain: string;
    detail: string;
  }>;
  rootCause: {
    code: string;
    title: string;
    file: string;
    evidence: string;
    explanation: string;
    remediation: string;
  };
  codeSnippet: {
    filename: string;
    lines: Array<{
      num: number;
      text: string;
      highlight?: "conflict" | "danger" | "neutral" | "added";
    }>;
  };
}

export function CausalAnatomy() {
  const [selectedCase, setSelectedCase] = useState<CaseKey>("merge-conflict");
  const [isTracing, setIsTracing] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(2);
  const [isSimulatedFixed, setIsSimulatedFixed] = useState(false);
  const [showCodeSnippet, setShowCodeSnippet] = useState(true);

  const cases: Record<CaseKey, DiagnosticCase> = {
    "merge-conflict": {
      id: "merge-conflict",
      label: "Case 01: Git Conflict Cascade",
      title: "Unresolved Git Conflict Collapsing into Syntax Errors",
      summary:
        "Merge conflict markers inside declared project configuration manifests cause multiple downstream parser exceptions.",
      latencyMs: 14,
      symptoms: [
        {
          code: "DEP006",
          title: "Malformed pyproject.toml TOML syntax exception",
          severity: "ERROR",
          domain: "Manifest Parsing",
          detail: "TomlDecodeError: Invalid character in key name at line 14",
        },
        {
          code: "STR001",
          title: "Cannot classify package dependencies or project type",
          severity: "WARNING",
          domain: "Structure Analysis",
          detail: "Fails to determine project manager (poetry/flit/setuptools)",
        },
      ],
      rootCause: {
        code: "GIT005",
        title: "Unresolved Git merge conflict markers (<<<<<<< HEAD)",
        file: "pyproject.toml:14",
        evidence: "Found unresolved marker '<<<<<<< HEAD' inside dependency table",
        explanation:
          "The TOML syntax error and framework classification failure are direct downstream symptoms of unresolved git conflict markers.",
        remediation: "Resolve git conflict markers manually in pyproject.toml before running dependency commands.",
      },
      codeSnippet: {
        filename: "pyproject.toml",
        lines: [
          { num: 12, text: "[tool.poetry.dependencies]" },
          { num: 13, text: "python = \"^3.11\"" },
          { num: 14, text: "<<<<<<< HEAD", highlight: "conflict" },
          { num: 15, text: "requests = \"^2.31.0\"", highlight: "conflict" },
          { num: 16, text: "=======", highlight: "conflict" },
          { num: 17, text: "requests = \"^2.32.3\"", highlight: "conflict" },
          { num: 18, text: ">>>>>>> feature/security-patch", highlight: "conflict" },
          { num: 19, text: "pydantic = \"^2.6.0\"" },
        ],
      },
    },
    "staged-secrets": {
      id: "staged-secrets",
      label: "Case 02: Unprotected Secrets",
      title: "Missing .gitignore Causing Secret Credentials Leakage",
      summary:
        "A missing or uncommitted root .gitignore file allows local .env files to be tracked in git index during development.",
      latencyMs: 11,
      symptoms: [
        {
          code: "GIT002",
          title: ".env file exists locally but is omitted from .gitignore",
          severity: "WARNING",
          domain: "Repository Guard",
          detail: "Local credential store exposed to accidental git staging",
        },
        {
          code: "GIT003",
          title: "Sensitive credentials actively tracked in Git index",
          severity: "ERROR",
          domain: "Index Audit",
          detail: "Tracked object '.env' flagged with staging risk",
        },
      ],
      rootCause: {
        code: "GIT001",
        title: "No .gitignore file detected in Git repository root",
        file: ".gitignore",
        evidence: "Root path lacks .gitignore, allowing .env to be indexed",
        explanation:
          "Lack of default ignore definitions caused confidential environment variables to be staged into revision control.",
        remediation: "git rm --cached .env && echo '.env' >> .gitignore",
      },
      codeSnippet: {
        filename: "git status --porcelain",
        lines: [
          { num: 1, text: "A  .env           # ALERT: Secret key file staged!", highlight: "danger" },
          { num: 2, text: "A  src/app.py" },
          { num: 3, text: "?? .gitignore     # Missing from committed repo tree", highlight: "danger" },
        ],
      },
    },
    "venv-drift": {
      id: "venv-drift",
      label: "Case 03: Virtualenv Drift",
      title: "Dangling Virtualenv Symlink to Deleted System Python",
      summary:
        "After an operating system update or pyenv uninstallation, the virtualenv interpreter symlink points to a nonexistent binary.",
      latencyMs: 19,
      symptoms: [
        {
          code: "PY002",
          title: "Virtual environment interpreter binary not executable",
          severity: "ERROR",
          domain: "Interpreter Integrity",
          detail: ".venv/bin/python -> broken symlink",
        },
        {
          code: "DEP004",
          title: "Declared dependencies installed in mismatched runtime",
          severity: "WARNING",
          domain: "Runtime Binding",
          detail: "Cannot probe site-packages due to failed python subshell",
        },
      ],
      rootCause: {
        code: "PY001",
        title: "Broken interpreter symlink in .venv/pyvenv.cfg",
        file: ".venv/pyvenv.cfg",
        evidence: "home = /usr/local/opt/python@3.11/bin (Target path not found)",
        explanation:
          "The underlying system Python was upgraded or relocated, leaving the local virtualenv pointing to a phantom binary path.",
        remediation: "rm -rf .venv && python3.11 -m venv .venv && pip install -r requirements.txt",
      },
      codeSnippet: {
        filename: ".venv/pyvenv.cfg",
        lines: [
          { num: 1, text: "home = /opt/homebrew/opt/python@3.11/bin", highlight: "danger" },
          { num: 2, text: "include-system-site-packages = false" },
          { num: 3, text: "version = 3.11.4" },
          { num: 4, text: "executable = /opt/homebrew/bin/python3.11  # [MISSING]", highlight: "danger" },
        ],
      },
    },
  };

  const active = cases[selectedCase];

  const triggerTraceAnimation = () => {
    setIsTracing(true);
    setIsSimulatedFixed(false);
    setActiveStep(0);

    setTimeout(() => {
      setActiveStep(1);
    }, 350);

    setTimeout(() => {
      setActiveStep(2);
      setIsTracing(false);
    }, 750);
  };

  const handleCaseChange = (key: CaseKey) => {
    setSelectedCase(key);
    setIsSimulatedFixed(false);
    triggerTraceAnimation();
  };

  const handleSimulateFix = () => {
    setIsSimulatedFixed(!isSimulatedFixed);
  };

  return (
    <section
      id="investigation"
      className="relative py-20 md:py-28 px-4 sm:px-6 bg-[#F7F4F3] border-b border-[#EAE5E3] overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto space-y-10 md:space-y-12">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EAE5E3]">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#800E13] font-semibold">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AD2831] opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-[#800E13]" />
              </span>
              Deterministic Causal Engine
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#250902] tracking-tight font-sans">
              How scattered symptoms become an actionable diagnosis.
            </h2>
            <p className="text-sm md:text-base text-[#250902]/70 font-sans leading-relaxed pt-1">
              In real codebases, a single root failure triggers cascades of misleading warnings.
              Dextora maps causal relationships between diagnostic codes so you fix the source, not just the noise.
            </p>
          </div>

          {/* Interactive Diagnostic Controls */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={triggerTraceAnimation}
              disabled={isTracing}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#800E13] hover:bg-[#640D14] text-white text-xs font-mono font-semibold transition-all shadow-crimson disabled:opacity-70 group"
            >
              <RefreshCw
                className={`size-3.5 text-[#F9C0C3] transition-transform ${
                  isTracing ? "animate-spin" : "group-hover:rotate-180 duration-500"
                }`}
              />
              <span>{isTracing ? "Tracing AST..." : "Re-run Diagnostic"}</span>
            </button>

            <button
              onClick={handleSimulateFix}
              type="button"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-all border ${
                isSimulatedFixed
                  ? "bg-emerald-50 border-emerald-300 text-emerald-800 font-bold"
                  : "bg-white border-[#EAE5E3] text-[#250902] hover:bg-[#FDF2F2] hover:text-[#800E13]"
              }`}
            >
              <CheckCircle2
                className={`size-3.5 ${
                  isSimulatedFixed ? "text-emerald-600" : "text-[#800E13]"
                }`}
              />
              <span>{isSimulatedFixed ? "Patch Applied (Clean)" : "Simulate Patch"}</span>
            </button>
          </div>
        </div>

        {/* Interactive Scenario Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-[#EAE5E3] pb-3">
          {(Object.keys(cases) as CaseKey[]).map((key) => {
            const item = cases[key];
            const isActive = selectedCase === key;
            return (
              <button
                key={key}
                onClick={() => handleCaseChange(key)}
                type="button"
                className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-[#800E13] text-white font-semibold shadow-sm"
                    : "bg-white hover:bg-[#FDF2F2] text-[#250902]/80 hover:text-[#800E13] border border-[#EAE5E3]"
                }`}
              >
                <span
                  className={`size-1.5 rounded-full ${
                    isActive ? "bg-[#F9C0C3] animate-pulse" : "bg-[#800E13]/30"
                  }`}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Causal Interactive Stage */}
        <div className="relative bg-white rounded-2xl border border-[#EAE5E3] shadow-subtle overflow-hidden">
          {/* Top Live Metrology Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-3.5 bg-[#FDF2F2]/60 border-b border-[#F9C0C3]/60 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-bold text-[#800E13]">
                <Activity className="size-3.5 text-[#AD2831]" />
                <span>Heuristic: AST_GRAPH</span>
              </span>
              <span className="text-[#F9C0C3]">•</span>
              <span className="text-[#640D14]">
                Resolution:{" "}
                <span className="text-[#800E13] font-bold">
                  {isTracing ? "computing..." : `${active.latencyMs}ms`}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-white text-[#640D14] font-medium border border-[#F9C0C3]">
                Traversal: 2 Hops
              </span>
              <span className="px-2 py-0.5 rounded bg-[#800E13] text-white font-bold">
                Confidence: 100%
              </span>
            </div>
          </div>

          {/* Interactive Causal Visualization Grid */}
          <div className="p-6 sm:p-8 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative">
              {/* Left Column: Surface Symptoms (5 Cols) */}
              <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-center">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#640D14] flex items-center gap-1.5">
                    <Layers className="size-3.5 text-[#800E13]" />
                    <span>Scattered Surface Symptoms:</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#250902]/50">
                    Count: {active.symptoms.length}
                  </span>
                </div>

                {active.symptoms.map((symptom) => (
                  <div
                    key={symptom.code}
                    className={`relative p-4 rounded-xl border transition-all duration-300 space-y-2 overflow-hidden ${
                      isSimulatedFixed
                        ? "bg-emerald-50/40 border-emerald-200 opacity-90"
                        : activeStep >= 1
                        ? "bg-[#F7F4F3] border-[#EAE5E3] shadow-sm hover:border-[#800E13]/30"
                        : "bg-zinc-50/50 border-[#EAE5E3]/60 opacity-60"
                    }`}
                  >
                    {isTracing && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#800E13] animate-pulse" />
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#800E13]">
                          {symptom.code}
                        </span>
                        <span className="text-[10px] font-mono text-[#250902]/60">
                          [{symptom.domain}]
                        </span>
                      </div>

                      {isSimulatedFixed ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                          <CheckCircle2 className="size-3 text-emerald-600" />
                          <span>RESOLVED</span>
                        </span>
                      ) : (
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                            symptom.severity === "ERROR"
                              ? "bg-[#FDE5E6] text-[#800E13] border border-[#F9C0C3]"
                              : "bg-amber-100 text-amber-800 border border-amber-200"
                          }`}
                        >
                          {symptom.severity}
                        </span>
                      )}
                    </div>

                    <div className="text-xs font-semibold text-[#250902] font-sans">
                      {symptom.title}
                    </div>

                    <div className="text-[11px] font-mono text-[#250902]/70 bg-white p-2 rounded border border-[#EAE5E3] line-clamp-1">
                      {symptom.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Middle Column: Dynamic Causal Signal Conduit (2 Cols) */}
              <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 relative">
                <div className="hidden lg:flex flex-col items-center justify-center w-full h-full relative">
                  <div className="w-0.5 h-full bg-[#EAE5E3] absolute top-0 bottom-0" />

                  <div
                    className={`size-9 rounded-full bg-white border-2 flex items-center justify-center z-10 transition-colors shadow-sm ${
                      isSimulatedFixed
                        ? "border-emerald-500 text-emerald-600"
                        : "border-[#800E13] text-[#800E13]"
                    }`}
                  >
                    <Zap
                      className={`size-4 ${
                        isTracing ? "animate-bounce text-[#AD2831]" : ""
                      }`}
                    />
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-tight text-[#800E13] bg-white px-2 py-0.5 rounded border border-[#F9C0C3] mt-2 z-10">
                    {isSimulatedFixed ? "VERIFIED" : "CORRELATED"}
                  </span>
                </div>

                <div className="lg:hidden flex items-center gap-2 py-2">
                  <span className="text-[11px] font-mono text-[#800E13] font-bold bg-[#FDF2F2] px-3 py-1 rounded-full border border-[#F9C0C3]">
                    &darr; ROOT CAUSE IDENTIFIED &darr;
                  </span>
                </div>
              </div>

              {/* Right Column: Correlated Root Cause in Deep Charcoal (10% contrast layer) */}
              <div
                className={`lg:col-span-5 p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden ${
                  isSimulatedFixed
                    ? "bg-emerald-50/60 border-emerald-300 shadow-sm"
                    : activeStep >= 2
                    ? "bg-[#250902] border-[#38040E] text-white shadow-xl"
                    : "bg-[#250902]/80 border-[#38040E] opacity-60 text-white"
                }`}
              >
                {isTracing && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#AD2831] to-transparent animate-scanline pointer-events-none" />
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b pb-3 border-[#38040E]">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSimulatedFixed
                          ? "bg-emerald-200 text-emerald-900"
                          : "bg-[#38040E] text-[#F9C0C3] border border-[#640D14]"
                      }`}
                    >
                      {isSimulatedFixed ? "Cause Neutralized" : "Primary Root Cause"}
                    </span>
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded ${
                        isSimulatedFixed
                          ? "bg-emerald-100 text-emerald-900"
                          : "bg-[#800E13] text-white"
                      }`}
                    >
                      {active.rootCause.code}
                    </span>
                  </div>

                  <div>
                    <h4
                      className={`font-bold text-base font-sans leading-snug ${
                        isSimulatedFixed ? "text-emerald-950" : "text-white"
                      }`}
                    >
                      {active.rootCause.title}
                    </h4>
                    <p
                      className={`text-xs mt-1.5 leading-relaxed font-sans ${
                        isSimulatedFixed ? "text-emerald-800" : "text-zinc-300"
                      }`}
                    >
                      {active.rootCause.explanation}
                    </p>
                  </div>

                  {/* Evidence Tag */}
                  <div
                    className={`p-2.5 rounded-lg text-xs font-mono flex items-start gap-2 ${
                      isSimulatedFixed
                        ? "bg-white/80 border border-emerald-200 text-emerald-900"
                        : "bg-[#38040E] border border-[#640D14] text-[#FDE5E6]"
                    }`}
                  >
                    <span className="text-[#AD2831] font-bold shrink-0">&bull;</span>
                    <span className="text-[11px] leading-relaxed">
                      {active.rootCause.evidence}
                    </span>
                  </div>
                </div>

                {/* Remediation Action Command */}
                <div className="pt-2">
                  <div className="text-[10px] font-mono text-[#F9C0C3] mb-1.5 flex items-center justify-between">
                    <span>Targeted Remediation Command:</span>
                    <span className="text-[10px] text-[#AD2831] font-semibold">
                      Deterministic fix
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-[#38040E] flex items-center justify-between gap-3 font-mono text-xs">
                    <code className="text-[#F9C0C3] font-bold overflow-x-auto py-0.5 select-all">
                      {active.rootCause.remediation}
                    </code>
                    <CopyButton
                      text={active.rootCause.remediation}
                      className="bg-[#640D14] hover:bg-[#800E13] text-white px-2.5 py-1 rounded text-xs shrink-0"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Collapsible Forensic Manifest Lens */}
            <div className="pt-4 border-t border-[#EAE5E3]">
              <button
                onClick={() => setShowCodeSnippet(!showCodeSnippet)}
                type="button"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-[#F7F4F3] hover:bg-[#FDF2F2] transition-colors text-xs font-mono text-[#250902]"
              >
                <div className="flex items-center gap-2">
                  <FileCode2 className="size-4 text-[#800E13]" />
                  <span className="font-bold">
                    Forensic Source Lens:{" "}
                    <span className="font-normal text-[#250902]/60">
                      {active.codeSnippet.filename}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#800E13]">
                  <span>{showCodeSnippet ? "Hide Snippet" : "Inspect Code Snippet"}</span>
                  {showCodeSnippet ? (
                    <ChevronUp className="size-3.5" />
                  ) : (
                    <ChevronDown className="size-3.5" />
                  )}
                </div>
              </button>

              {showCodeSnippet && (
                <div className="mt-2 rounded-xl bg-[#250902] border border-[#38040E] p-4 text-xs font-mono text-zinc-300 overflow-x-auto shadow-inner">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#38040E] text-[10px] text-[#F9C0C3]/60">
                    <span>{active.codeSnippet.filename}</span>
                    <span className="text-[#AD2831]">Lexer Inspection Pass</span>
                  </div>
                  <div className="space-y-1">
                    {active.codeSnippet.lines.map((line) => (
                      <div
                        key={line.num}
                        className={`flex items-start gap-4 px-2 py-0.5 rounded ${
                          line.highlight === "conflict"
                            ? "bg-[#640D14]/80 text-[#FDE5E6] border-l-2 border-[#AD2831] font-bold"
                            : line.highlight === "danger"
                            ? "bg-[#800E13]/80 text-[#FDE5E6] border-l-2 border-[#AD2831] font-bold"
                            : "text-zinc-400"
                        }`}
                      >
                        <span className="w-6 text-zinc-600 select-none text-right shrink-0">
                          {line.num}
                        </span>
                        <span className="select-all">{line.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
