import React from "react";
import { EyeOff, FileText, Ban, Compass, CheckCircle2 } from "lucide-react";

export function SafetyPrinciples() {
  const principles = [
    {
      icon: EyeOff,
      title: "Secret Key Privacy by Design",
      desc: "Compares declared variable names between .env and template files (.env.example, .env.sample). Secret values are never loaded into memory, displayed in terminal outputs, or included in JSON findings.",
      badge: "ENV000-004",
      guarantee: "Values never stored in memory or JSON",
    },
    {
      icon: FileText,
      title: "100% Read-Only Diagnostics",
      desc: "The doctor command never writes to or deletes scanned files. File system modifications are strictly restricted to dextora init, which creates a local .dextora.toml and refuses to overwrite existing files without --force.",
      badge: "Read-Only Core",
      guarantee: "Zero repository filesystem mutations",
    },
    {
      icon: Ban,
      title: "Zero Project Code Execution",
      desc: "Dextora never imports or executes scanned project code, setup.py scripts, npm postinstall hooks, or recommended remediation commands. Diagnostics are purely static and isolated.",
      badge: "Static AST & Lexer",
      guarantee: "Safe to run on untrusted repositories",
    },
    {
      icon: Compass,
      title: "Filesystem Boundary Discipline",
      desc: "Diagnostic sweeps do not traverse symlinks leading outside the target directory root. Automatically excludes heavyweight directories (.git, node_modules, .venv, caches, build artifacts).",
      badge: "Bounded Traversal",
      guarantee: "Guaranteed bounded execution time",
    },
  ];

  return (
    <section id="safety" className="py-20 md:py-28 px-4 sm:px-6 bg-[#F7F4F3] border-b border-[#EAE5E3]">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-3 pb-4 border-b border-[#EAE5E3]">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#800E13] font-semibold">
            <span className="size-1.5 rounded-full bg-[#800E13]" />
            <span>Safety &amp; Privacy Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#250902] tracking-tight font-sans">
            Engineered for safe execution in any codebase.
          </h2>
          <p className="text-sm text-[#250902]/70 font-sans leading-relaxed">
            Dextora operates locally under strict non-destructive constraints. Run it across untrusted PRs, multi-tenant monorepos, and local workstations without side effects.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#EAE5E3] rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-[#800E13]/30 transition-all shadow-subtle"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="size-10 rounded-xl bg-[#FDF2F2] border border-[#F9C0C3] flex items-center justify-center text-[#800E13] shadow-sm">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#F7F4F3] border border-[#EAE5E3] text-[#640D14] font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#250902] font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#250902]/70 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE5E3] flex items-center gap-2 text-xs font-mono text-[#250902]">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span className="text-[11px] font-medium">{item.guarantee}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Boundaries Note */}
        <div className="p-5 rounded-xl bg-white border border-[#EAE5E3] text-xs text-[#250902]/70 space-y-1.5 leading-relaxed font-sans shadow-subtle">
          <div className="font-bold text-[#800E13]">
            Offline Determinism Guarantee
          </div>
          <p>
            Dextora performs static offline analysis of declared manifests, lockfiles, and environment templates. It does not phone home, does not query external registries, and does not require cloud credentials.
          </p>
        </div>
      </div>
    </section>
  );
}
