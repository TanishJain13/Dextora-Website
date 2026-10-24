import React from "react";
import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";
import { Logo } from "@/components/Logo";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Github,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Documentation & CLI Reference | Dextora",
  description:
    "Comprehensive documentation, command reference, configuration specs, and diagnostic codes for Dextora, the open-source developer diagnostics CLI toolkit.",
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white text-[#250902] flex flex-col font-sans selection:bg-[#800E13] selection:text-white">
      {/* Top Docs Header */}
      <header className="sticky top-0 z-40 w-full border-b border-[#EAE5E3] bg-white/95 backdrop-blur-md px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#250902]/70 hover:text-[#800E13] transition-colors py-1 px-2 rounded-lg hover:bg-[#F7F4F3]"
            >
              <ArrowLeft className="size-3.5" />
              <span>Back to Home</span>
            </Link>
            <span className="text-[#EAE5E3] hidden sm:inline">/</span>
            <Link href="/" className="hidden sm:flex items-center">
              <Logo size="sm" showVersion />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/TanishJain13/Dextora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#250902] hover:text-[#800E13] px-3 py-1.5 rounded-lg border border-[#EAE5E3] bg-[#F7F4F3] hover:bg-[#FDF2F2] transition-colors"
            >
              <Github className="size-3.5" />
              <span>GitHub</span>
              <ExternalLink className="size-3 text-[#AD2831]" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Docs Body */}
      <div className="max-w-6xl mx-auto px-6 py-12 grow w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Sticky Sidebar Navigation */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-20 space-y-6 text-xs font-mono">
            <div className="space-y-2">
              <div className="font-bold text-[#800E13] uppercase tracking-wider text-[11px]">
                Getting Started
              </div>
              <ul className="space-y-1.5 text-[#250902]/70 border-l border-[#EAE5E3] pl-3">
                <li>
                  <a href="#overview" className="hover:text-[#800E13] block py-0.5">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#installation" className="hover:text-[#800E13] block py-0.5">
                    Installation
                  </a>
                </li>
                <li>
                  <a href="#quick-start" className="hover:text-[#800E13] block py-0.5">
                    First Scan
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-[#800E13] uppercase tracking-wider text-[11px]">
                CLI Command Reference
              </div>
              <ul className="space-y-1.5 text-[#250902]/70 border-l border-[#EAE5E3] pl-3">
                <li>
                  <a href="#doctor-command" className="hover:text-[#800E13] block py-0.5">
                    dextora doctor
                  </a>
                </li>
                <li>
                  <a href="#json-flag" className="hover:text-[#800E13] block py-0.5">
                    --json Output
                  </a>
                </li>
                <li>
                  <a href="#strict-flag" className="hover:text-[#800E13] block py-0.5">
                    --strict Flag
                  </a>
                </li>
                <li>
                  <a href="#init-command" className="hover:text-[#800E13] block py-0.5">
                    dextora init
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-[#800E13] uppercase tracking-wider text-[11px]">
                Configuration
              </div>
              <ul className="space-y-1.5 text-[#250902]/70 border-l border-[#EAE5E3] pl-3">
                <li>
                  <a href="#config-file" className="hover:text-[#800E13] block py-0.5">
                    .dextora.toml Spec
                  </a>
                </li>
                <li>
                  <a href="#safety-model" className="hover:text-[#800E13] block py-0.5">
                    Safety Model
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="lg:col-span-9 space-y-14">
          {/* Overview */}
          <section id="overview" className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#FDF2F2] text-[#800E13] font-mono text-xs border border-[#F9C0C3]">
              <BookOpen className="size-3" /> Reference Guide
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#250902] tracking-tight">
              Dextora Documentation
            </h1>
            <p className="text-sm sm:text-base text-[#250902]/70 leading-relaxed font-sans">
              Dextora is an open-source Python CLI toolkit designed to detect and diagnose project setup,
              environment configuration, dependency mismatches, and common version control pitfalls.
            </p>
          </section>

          {/* Installation */}
          <section id="installation" className="space-y-5 pt-6 border-t border-[#EAE5E3]">
            <h2 className="text-2xl font-bold text-[#250902]">
              Installation &amp; Prerequisites
            </h2>
            <p className="text-sm text-[#250902]/70 leading-relaxed font-sans">
              <strong>Prerequisites:</strong> Python 3.11 or newer is required to execute the CLI
              (declared as <code className="text-[#800E13] font-mono font-bold">requires-python = &quot;&gt;=3.11&quot;</code> in <code className="text-[#250902] font-mono">pyproject.toml</code>).
            </p>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#250902]/60">Install via pip:</div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#250902] text-white font-mono text-xs border border-[#38040E]">
                <code>pip install dextora</code>
                <CopyButton text="pip install dextora" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#250902]/60">Local editable development setup:</div>
              <div className="p-4 rounded-xl bg-[#250902] text-white font-mono text-xs space-y-2 border border-[#38040E]">
                <div className="text-[#F9C0C3]/60"># 1. Clone repository</div>
                <div>git clone https://github.com/TanishJain13/Dextora.git</div>
                <div className="text-[#F9C0C3]/60"># 2. Create and activate virtual environment</div>
                <div>python -m venv .venv &amp;&amp; source .venv/bin/activate</div>
                <div className="text-[#F9C0C3]/60"># 3. Install in editable mode with development dependencies</div>
                <div>pip install -e &quot;.[dev]&quot;</div>
              </div>
            </div>
          </section>

          {/* dextora doctor */}
          <section id="doctor-command" className="space-y-5 pt-6 border-t border-[#EAE5E3]">
            <h2 className="text-2xl font-bold text-[#250902]">The `doctor` Command</h2>
            <p className="text-sm text-[#250902]/70 leading-relaxed font-sans">
              The primary diagnostic command. Analyzes project manifests, virtual environments,
              dependencies, .env templates, and git status.
            </p>

            <div className="border border-[#EAE5E3] rounded-2xl p-5 bg-[#F7F4F3] space-y-3">
              <div className="flex items-center justify-between">
                <code className="text-sm font-mono font-bold text-[#800E13]">
                  dextora doctor [path]
                </code>
                <CopyButton text="dextora doctor ." />
              </div>
              <p className="text-xs text-[#250902]/70 font-sans">
                Scans target directory. If <code className="font-mono text-[#250902]">path</code> is omitted, defaults to the current working directory.
              </p>
              <div className="font-mono text-xs text-[#250902] bg-white p-3 rounded-lg border border-[#EAE5E3] space-y-1">
                <div>$ dextora doctor</div>
                <div>$ dextora doctor /path/to/my-project</div>
              </div>
            </div>
          </section>

          {/* Flags: --json and --strict */}
          <section id="json-flag" className="space-y-5 pt-6 border-t border-[#EAE5E3]">
            <h2 className="text-2xl font-bold text-[#250902]">CI &amp; Automation Flags</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-[#EAE5E3] rounded-2xl p-5 bg-white space-y-2.5 shadow-subtle">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[#800E13]">--json</span>
                  <CopyButton text="dextora doctor --json" />
                </div>
                <p className="text-xs text-[#250902]/70 leading-relaxed font-sans">
                  Emits unadorned, machine-readable JSON representation of all scan results.
                  Includes error counts, findings list, evidence snippets, and remediation commands.
                </p>
                <code className="block p-2 rounded-lg bg-[#F7F4F3] text-[#250902] font-mono text-[11px] border border-[#EAE5E3]">
                  dextora doctor --json
                </code>
              </div>

              <div id="strict-flag" className="border border-[#EAE5E3] rounded-2xl p-5 bg-white space-y-2.5 shadow-subtle">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[#AD2831]">--strict</span>
                  <CopyButton text="dextora doctor --strict" />
                </div>
                <p className="text-xs text-[#250902]/70 leading-relaxed font-sans">
                  By default, Dextora exits with code 1 only on <code className="text-[#800E13] font-bold">ERROR</code>.
                  With <code className="text-[#AD2831] font-bold">--strict</code>, any warning will also exit with code 1.
                </p>
                <code className="block p-2 rounded-lg bg-[#F7F4F3] text-[#250902] font-mono text-[11px] border border-[#EAE5E3]">
                  dextora doctor --strict
                </code>
              </div>
            </div>
          </section>

          {/* dextora init */}
          <section id="init-command" className="space-y-5 pt-6 border-t border-[#EAE5E3]">
            <h2 className="text-2xl font-bold text-[#250902]">The `init` Command</h2>
            <p className="text-sm text-[#250902]/70 leading-relaxed font-sans">
              Creates a minimal project-level <code className="font-mono text-[#800E13]">.dextora.toml</code> configuration.
              Refuses to overwrite an existing configuration without the <code className="font-mono text-[#250902]">--force</code> flag.
            </p>

            <div className="border border-[#EAE5E3] rounded-2xl p-5 bg-[#F7F4F3] space-y-3">
              <div className="flex items-center justify-between">
                <code className="text-sm font-mono font-bold text-[#800E13]">
                  dextora init [path] [--force]
                </code>
                <CopyButton text="dextora init" />
              </div>
              <div className="font-mono text-xs text-[#250902] bg-white p-3 rounded-lg border border-[#EAE5E3] space-y-1">
                <div>$ dextora init</div>
                <div>$ dextora init --force   # Overwrite existing .dextora.toml</div>
              </div>
            </div>
          </section>

          {/* .dextora.toml Spec */}
          <section id="config-file" className="space-y-5 pt-6 border-t border-[#EAE5E3]">
            <h2 className="text-2xl font-bold text-[#250902]">Configuration Spec (.dextora.toml)</h2>
            <p className="text-sm text-[#250902]/70 leading-relaxed font-sans">
              When present in the project root, Dextora loads rule configurations, severity thresholds, and diagnostic overrides:
            </p>

            <div className="p-4 rounded-xl bg-[#250902] text-zinc-100 font-mono text-xs space-y-1 border border-[#38040E]">
              <div className="text-[#F9C0C3]/50"># Dextora Project Configuration</div>
              <div className="text-[#F9C0C3]/50"># Project diagnostics configuration</div>
              <br />
              <div className="text-[#AD2831] font-bold">[project]</div>
              <div className="text-[#F9C0C3]/50"># Optional project name override</div>
              <div>name = &quot;my-application&quot;</div>
              <br />
              <div className="text-[#AD2831] font-bold">[diagnostics]</div>
              <div className="text-[#F9C0C3]/50"># Severity threshold for strict CI mode: &quot;ERROR&quot; or &quot;WARNING&quot;</div>
              <div>fail_on = &quot;ERROR&quot;</div>
              <br />
              <div className="text-[#F9C0C3]/50"># Diagnostic check overrides or exclusions</div>
              <div>ignore = [&quot;DEP008&quot;]</div>
            </div>
          </section>

          {/* Safety Model */}
          <section id="safety-model" className="space-y-5 pt-6 border-t border-[#EAE5E3]">
            <h2 className="text-2xl font-bold text-[#250902]">Execution Safety Model</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-[#EAE5E3] rounded-2xl p-4 bg-white space-y-1.5 shadow-subtle">
                <div className="font-bold text-sm text-[#250902] flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  <span>Read-Only Operations</span>
                </div>
                <p className="text-xs text-[#250902]/70 leading-relaxed font-sans">
                  Doctor scans never mutate, write to, or delete files in target repositories.
                </p>
              </div>

              <div className="border border-[#EAE5E3] rounded-2xl p-4 bg-white space-y-1.5 shadow-subtle">
                <div className="font-bold text-sm text-[#250902] flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  <span>Secret Redaction</span>
                </div>
                <p className="text-xs text-[#250902]/70 leading-relaxed font-sans">
                  Secret values from .env files are never parsed into memory, logged, or exposed in output.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#EAE5E3] py-8 text-center text-xs font-mono text-[#250902]/50">
        &copy; {new Date().getFullYear()} Dextora Open Source. Licensed under MIT.
      </footer>
    </div>
  );
}
