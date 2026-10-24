import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { DiagnosticDomains } from "@/components/DiagnosticDomains";
import { CausalAnatomy } from "@/components/CausalAnatomy";
import { TerminalConsole } from "@/components/TerminalConsole";
import { HowItWorks } from "@/components/HowItWorks";
import { DiagnosticCodesTable } from "@/components/DiagnosticCodesTable";
import { QuickStart } from "@/components/QuickStart";
import { SafetyPrinciples } from "@/components/SafetyPrinciples";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Dextora | Deterministic Project Setup & Environment Diagnostics for Python",
  description:
    "Dextora is an open-source Python CLI toolkit that diagnoses project setup, virtual environments, dependency conflicts, environment configuration, and version control drift.",
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white text-[#250902] selection:bg-[#800E13] selection:text-white flex flex-col font-sans">
      {/* Section A: Navigation */}
      <Navbar />

      {/* Main Structural Narrative */}
      <main className="grow">
        {/* Section B & C: Hero with Original Owl Mascot Illustration */}
        <Hero />

        {/* Section D: Problem & Solution Editorial Comparison */}
        <ProblemSolution />

        {/* Section E: Capabilities & 6 Inspection Domains */}
        <DiagnosticDomains />

        {/* Causal AST Engine Deep Dive */}
        <CausalAnatomy />

        {/* Section F: Interactive Terminal Console Demo */}
        <TerminalConsole />

        {/* Section G: How It Works — 4-Stage Architecture Diagram */}
        <HowItWorks />

        {/* Complete Searchable Diagnostic Codes Catalogue */}
        <DiagnosticCodesTable />

        {/* Section H: Quick-Start Workflow */}
        <QuickStart />

        {/* Safety & Secret Redaction Model */}
        <SafetyPrinciples />

        {/* Section I: Open Source Community (Crimson Brand Moment) */}
        <OpenSourceSection />

        {/* Section J: Technical FAQ */}
        <FaqSection />
      </main>

      {/* Section K: Footer */}
      <Footer />
    </div>
  );
}
