import React from "react";
import { Terminal, Shield, GitBranch, KeyRound, Cpu, Layers } from "lucide-react";

export function DiagnosticDomains() {
  const domains = [
    {
      title: "Python Environment Verification",
      code: "PY000 — PY004",
      highlight: "Virtualenv & Interpreter Health",
      desc: "Discovers standard virtual environments (.venv, venv, env), verifies interpreter binary presence, checks site-packages status, and validates requires-python version constraints against active runtimes.",
    },
    {
      title: "Dependency & Lockfile Diagnostics",
      code: "DEP001 — DEP009",
      highlight: "Drift & Manager Conflicts",
      desc: "Detects orphaned lockfiles (poetry.lock without pyproject.toml), conflicting package managers (Pipenv + Poetry, pnpm + npm), duplicate packages, and unpinned dependencies in requirements.txt.",
    },
    {
      title: "Secret Redaction & Environment Privacy",
      code: "ENV000 — ENV004",
      highlight: "100% Zero-Leakage Guarantee",
      desc: "Compares .env keys against .env.example templates. Secret values are never loaded into memory, displayed in terminal evidence, or included in JSON serialization.",
    },
    {
      title: "Version Control Integrity Checks",
      code: "GIT000 — GIT005",
      highlight: "Git Status & Staged Secrets",
      desc: "Detects unmerged Git conflict markers (<<<<<<<), verifies .gitignore coverage, and alerts immediately if sensitive files (.env) are tracked in the Git index.",
    },
    {
      title: "Multi-Framework Classification",
      code: "STR000 — STR003",
      highlight: "Declared Manifest Recognition",
      desc: "Classifies Django, FastAPI, Flask, Next.js, React, Nuxt, Vue, SvelteKit, Angular, Astro, and composite fullstack architectures from declared dependencies and manifests.",
    },
    {
      title: "Read-Only Non-Destructive Safety",
      code: "Read-Only Core",
      highlight: "Zero Script Execution",
      desc: "Doctor diagnostics never mutate scanned files or execute arbitrary project scripts. Automatically skips heavyweight directories (.git, node_modules, .venv, caches).",
    },
  ];

  return (
    <section id="capabilities" className="py-20 md:py-28 px-4 sm:px-6 bg-[#FFFFFF] border-b border-[#EAE5E3]">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl pb-4 border-b border-[#EAE5E3]">
          <div className="text-xs font-mono font-bold text-[#800E13] uppercase tracking-wider flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#800E13]" />
            <span>Verified Inspection Suites</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#250902] tracking-tight font-sans">
            Six comprehensive diagnostic domains.
          </h2>
          <p className="text-[#250902]/70 text-sm md:text-base font-sans leading-relaxed">
            Every check in Dextora runs locally with deterministic rules. No hallucinated warnings, no remote registry calls.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, idx) => (
            <div
              key={idx}
              className="border border-[#EAE5E3] rounded-2xl bg-[#F7F4F3] p-6 flex flex-col justify-between space-y-5 shadow-subtle hover:border-[#800E13]/40 hover:bg-white transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#800E13]">
                    {domain.code}
                  </span>
                  <span className="text-[10px] font-mono text-[#800E13] bg-[#FDF2F2] border border-[#F9C0C3] px-2 py-0.5 rounded font-semibold">
                    Deterministic
                  </span>
                </div>

                <h3 className="font-bold text-base text-[#250902] leading-snug group-hover:text-[#800E13] transition-colors">
                  {domain.title}
                </h3>

                <p className="text-xs text-[#250902]/70 leading-relaxed font-sans">
                  {domain.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAE5E3] text-[11px] font-mono text-[#640D14] font-medium">
                &rarr; {domain.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
