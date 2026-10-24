import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Github, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white py-16 px-6 text-[#250902]/70 text-xs border-t border-[#EAE5E3]">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Info - 2 cols */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" showVersion={true} />
            <p className="text-[#250902]/70 max-w-sm leading-relaxed text-xs sm:text-sm font-sans">
              Dextora is an open-source Python CLI toolkit for diagnosing project setup, dependency integrity, environment configuration, and version control drift.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#250902]/50 pt-1">
              <span>Python &ge; 3.11</span>
              <span>•</span>
              <span>Zero Telemetry</span>
              <span>•</span>
              <span>MIT Licensed</span>
            </div>
          </div>

          {/* Links Column 1: Diagnostic Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#800E13]">
              Diagnostic Engine
            </h4>
            <ul className="space-y-2 text-[#250902]/70 font-sans">
              <li>
                <Link href="/#investigation" className="hover:text-[#800E13] transition-colors">
                  Causal Root Analysis
                </Link>
              </li>
              <li>
                <Link href="/#cli-console" className="hover:text-[#800E13] transition-colors">
                  CLI Terminal Console
                </Link>
              </li>
              <li>
                <Link href="/#capabilities" className="hover:text-[#800E13] transition-colors">
                  Inspection Domains
                </Link>
              </li>
              <li>
                <Link href="/#rules" className="hover:text-[#800E13] transition-colors">
                  Diagnostic Codes Directory
                </Link>
              </li>
              <li>
                <Link href="/#safety" className="hover:text-[#800E13] transition-colors">
                  Safety &amp; Privacy Model
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Documentation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#800E13]">
              Documentation
            </h4>
            <ul className="space-y-2 text-[#250902]/70 font-sans">
              <li>
                <Link href="/docs" className="hover:text-[#800E13] transition-colors">
                  CLI Reference
                </Link>
              </li>
              <li>
                <Link href="/docs#doctor-command" className="hover:text-[#800E13] transition-colors">
                  dextora doctor
                </Link>
              </li>
              <li>
                <Link href="/docs#json-flag" className="hover:text-[#800E13] transition-colors">
                  --json &amp; --strict Flags
                </Link>
              </li>
              <li>
                <Link href="/docs#init-command" className="hover:text-[#800E13] transition-colors">
                  dextora init
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#800E13] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Community & Open Source */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#800E13]">
              Open Source
            </h4>
            <ul className="space-y-2 text-[#250902]/70 font-sans">
              <li>
                <a
                  href="https://github.com/TanishJain13/Dextora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#800E13] transition-colors inline-flex items-center gap-1"
                >
                  GitHub Repository <ArrowUpRight className="size-3 text-[#AD2831]" />
                </a>
              </li>
              <li>
                <a
                  href="https://pypi.org/project/dextora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#800E13] transition-colors inline-flex items-center gap-1"
                >
                  PyPI Package <ArrowUpRight className="size-3 text-[#AD2831]" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TanishJain13/Dextora/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#800E13] transition-colors inline-flex items-center gap-1"
                >
                  Issue Tracker <ArrowUpRight className="size-3 text-[#AD2831]" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TanishJain13/Dextora/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#800E13] transition-colors inline-flex items-center gap-1"
                >
                  Contributing <ArrowUpRight className="size-3 text-[#AD2831]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#EAE5E3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#250902]/60">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Dextora Open Source. Licensed under MIT.</span>
            <span>•</span>
            <span>
              Made by{" "}
              <a
                href="https://jaintanish.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#800E13] font-semibold hover:underline transition-colors"
              >
                Tanish Jain
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/TanishJain13/Dextora"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#800E13] transition-colors flex items-center gap-1"
            >
              <Github className="size-3.5" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <Link href="/docs" className="hover:text-[#800E13] transition-colors">
              Docs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
