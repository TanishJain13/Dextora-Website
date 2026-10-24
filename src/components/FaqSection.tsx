"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  codeSnippet?: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "What makes Dextora different from generic linters or ruff/flake8?",
      answer:
        "Linters inspect syntax and AST style inside individual Python files. Dextora is a workspace & environment diagnostic engine: it validates virtualenv interpreter links, detects conflicting package manager lockfiles (e.g. poetry vs requirements.txt), inspects missing keys across .env templates, verifies git merge conflict remnants in config files, and classifies project framework setups.",
    },
    {
      question: "Which Python versions are supported?",
      answer:
        "Dextora itself requires Python 3.11 or newer to run (as specified by requires-python = '>=3.11' in pyproject.toml). However, Dextora can inspect and diagnose projects targeting any version of Python (3.8, 3.9, 3.10, 3.11, 3.12, 3.13) by analyzing their declared virtual environments and manifest dependencies.",
    },
    {
      question: "How do I install Dextora?",
      answer:
        "You can install Dextora directly from PyPI via pip into your user environment, global environment, or project virtualenv. Once installed, the standalone dextora binary is immediately ready.",
      codeSnippet: "pip install dextora",
    },
    {
      question: "How do I run a diagnostic on my repository?",
      answer:
        "Run dextora doctor in your project root. You can also specify any subfolder or external path without navigating to it.",
      codeSnippet: "dextora doctor /path/to/target/project",
    },
    {
      question: "How can I integrate Dextora into CI/CD pipelines?",
      answer:
        "Run dextora doctor . --strict --json. In this mode, Dextora emits machine-readable JSON findings with exit code 1 if any warning or error is encountered, failing your pull request build before broken setups reach production.",
      codeSnippet: "dextora doctor . --strict --json",
    },
    {
      question: "Does Dextora mutate or modify my codebase files?",
      answer:
        "Never during diagnosis. dextora doctor is strictly 100% read-only. It never writes to, deletes, or modifies files in your repository, and it never executes scanned project code. The only command that touches the filesystem is dextora init, which writes a local .dextora.toml file and refuses to overwrite existing files without --force.",
    },
    {
      question: "How does Dextora protect secrets in .env files?",
      answer:
        "Dextora compares only declared variable names between .env and template files (.env.example). Secret values are completely ignored by the lexer, never stored in memory, never printed in the console report, and never exposed in JSON output.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 bg-[#F7F4F3] border-b border-[#EAE5E3]">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#800E13] font-semibold">
            <span className="size-1.5 rounded-full bg-[#800E13]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#250902] tracking-tight font-sans">
            Technical answers to common questions.
          </h2>
          <p className="text-sm text-[#250902]/70 font-sans leading-relaxed">
            Everything you need to know about compatibility, diagnostic mechanics, and CI/CD integration.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#EAE5E3] rounded-2xl overflow-hidden bg-white transition-colors shadow-subtle"
              >
                <button
                  onClick={() => toggle(idx)}
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-[#FDF2F2]/40 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-[#250902] font-sans">
                    {faq.question}
                  </span>
                  <div
                    className={`size-6 rounded-full border border-[#EAE5E3] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-[#800E13] text-white rotate-180" : "text-[#250902]/60"
                    }`}
                  >
                    <ChevronDown className="size-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-[#250902]/70 leading-relaxed space-y-3 border-t border-[#EAE5E3] font-sans">
                    <p>{faq.answer}</p>
                    {faq.codeSnippet && (
                      <div className="p-3 rounded-xl bg-[#250902] text-zinc-100 font-mono text-xs flex items-center justify-between border border-[#38040E]">
                        <code>$ <span className="text-[#F9C0C3] font-semibold">{faq.codeSnippet}</span></code>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
