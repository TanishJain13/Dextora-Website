"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { OwlLogo } from "./OwlLogo";
import { CopyButton } from "./CopyButton";
import { Github, Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#EAE5E3] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand Owl Logo & Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#800E13] rounded"
          aria-label="Dextora Home"
        >
          <OwlLogo size="sm" variant="compact" showWordmark={true} showVersion={true} />
        </Link>

        {/* Text Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#250902]/80">
          <Link
            href="/#capabilities"
            className="hover:text-[#800E13] transition-colors py-1"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="hover:text-[#800E13] transition-colors py-1"
          >
            How It Works
          </Link>
          <Link
            href="/#quickstart"
            className="hover:text-[#800E13] transition-colors py-1"
          >
            Quick Start
          </Link>
          <Link
            href="/docs"
            className="hover:text-[#800E13] transition-colors py-1"
          >
            Documentation
          </Link>
          <a
            href="https://github.com/TanishJain13/Dextora"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#800E13] transition-colors py-1 flex items-center gap-1"
          >
            <Github className="size-3 text-[#800E13]" />
            <span>GitHub</span>
          </a>
        </nav>

        {/* Right CTA & Copy Command */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center bg-[#F7F4F3] border border-[#EAE5E3] rounded-md px-2.5 py-1 text-xs font-mono text-[#250902]">
            <span className="text-[#800E13] font-bold mr-1.5 select-none">$</span>
            <code className="select-all mr-2">pip install dextora</code>
            <CopyButton text="pip install dextora" iconOnly />
          </div>

          <Link
            href="/#quickstart"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-[#800E13] hover:bg-[#640D14] text-white transition-all shadow-sm"
          >
            <span>Get Started</span>
            <ArrowRight className="size-3" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="md:hidden p-2 text-[#250902] hover:text-[#800E13] rounded hover:bg-[#F7F4F3]"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EAE5E3] bg-white px-4 py-5 space-y-4">
          <nav className="flex flex-col space-y-1 text-sm font-medium text-[#250902]">
            <Link
              href="/#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#F7F4F3] hover:text-[#800E13]"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#F7F4F3] hover:text-[#800E13]"
            >
              How It Works
            </Link>
            <Link
              href="/#quickstart"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#F7F4F3] hover:text-[#800E13]"
            >
              Quick Start
            </Link>
            <Link
              href="/docs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#F7F4F3] hover:text-[#800E13]"
            >
              Documentation
            </Link>
            <a
              href="https://github.com/TanishJain13/Dextora"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded hover:bg-[#F7F4F3] hover:text-[#800E13] flex items-center gap-2"
            >
              <Github className="size-4 text-[#800E13]" />
              <span>GitHub Repository</span>
            </a>
          </nav>

          <div className="pt-3 border-t border-[#EAE5E3] flex items-center justify-between gap-3">
            <div className="flex items-center bg-[#F7F4F3] border border-[#EAE5E3] rounded px-2.5 py-1 text-xs font-mono text-[#250902]">
              <span className="text-[#800E13] mr-1">$</span>
              <code>pip install dextora</code>
            </div>
            <Link
              href="/#quickstart"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 rounded bg-[#800E13] text-white text-xs font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
