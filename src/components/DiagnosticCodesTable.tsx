"use client";

import React, { useState, useMemo } from "react";
import { DIAGNOSTIC_CODES, DiagnosticCode } from "@/lib/diagnostics-data";
import { Search } from "lucide-react";

export function DiagnosticCodesTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Python", "Environment", "Dependencies", "Git", "JavaScript", "Structure"];

  const filteredCodes = useMemo(() => {
    return DIAGNOSTIC_CODES.filter((item) => {
      const matchesSearch =
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const severityBadge = (severity: DiagnosticCode["severity"]) => {
    switch (severity) {
      case "ERROR":
        return (
          <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FDE5E6] text-[#800E13] border border-[#F9C0C3]">
            ERROR
          </span>
        );
      case "WARNING":
        return (
          <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-200">
            WARN
          </span>
        );
      case "SUCCESS":
        return (
          <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
            OK
          </span>
        );
      case "INFO":
        return (
          <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-100 text-blue-800 border border-blue-200">
            INFO
          </span>
        );
    }
  };

  return (
    <section id="rules" className="py-20 md:py-28 px-4 sm:px-6 bg-[#F7F4F3] border-b border-[#EAE5E3]">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-2 pb-4 border-b border-[#EAE5E3]">
          <div className="text-xs font-mono font-bold text-[#800E13] uppercase tracking-wider flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#800E13]" />
            <span>Diagnostic Rule Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#250902] tracking-tight font-sans">
            Deterministic diagnostic catalogue.
          </h2>
          <p className="text-[#250902]/70 text-sm max-w-xl leading-relaxed font-sans">
            Every finding emitted by Dextora maps to a distinct identifier with an explanation, evidence rule, and suggested action.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white border border-[#EAE5E3] rounded-xl p-3.5 flex flex-col md:flex-row gap-3 justify-between items-stretch md:items-center shadow-subtle">
          {/* Search Input */}
          <div className="relative grow max-w-sm">
            <Search className="size-3.5 text-[#800E13] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search code or keyword (e.g. PY001, .env)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-[#F7F4F3] border border-[#EAE5E3] rounded-lg text-xs text-[#250902] placeholder:text-[#250902]/40 focus:outline-none focus:ring-1 focus:ring-[#800E13] focus:border-[#800E13] font-mono"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? "bg-[#800E13] text-white font-bold shadow-sm"
                    : "bg-[#F7F4F3] text-[#250902]/70 hover:text-[#800E13] hover:bg-[#FDF2F2] border border-[#EAE5E3]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Table Container */}
        <div className="border border-[#EAE5E3] rounded-2xl bg-white overflow-hidden shadow-subtle">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#EAE5E3] bg-[#FDF2F2]/60 text-[11px] font-mono text-[#640D14] uppercase tracking-wider">
                  <th className="py-3 px-4 font-bold">Code</th>
                  <th className="py-3 px-3 font-bold">Severity</th>
                  <th className="py-3 px-3 font-bold">Category</th>
                  <th className="py-3 px-4 font-bold">Description</th>
                  <th className="py-3 px-4 font-bold">Remediation Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE5E3] font-sans">
                {filteredCodes.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-[#250902]/40 font-mono text-xs">
                      No diagnostic codes matched &ldquo;{searchQuery}&rdquo;.
                    </td>
                  </tr>
                ) : (
                  filteredCodes.map((item) => (
                    <tr
                      key={item.code}
                      className="hover:bg-[#FDF2F2]/40 transition-colors"
                    >
                      <td className="py-3 px-4 font-mono font-bold text-[#800E13] whitespace-nowrap">
                        {item.code}
                      </td>
                      <td className="py-3 px-3 whitespace-nowrap">
                        {severityBadge(item.severity)}
                      </td>
                      <td className="py-3 px-3 font-mono text-xs text-[#250902]/60 whitespace-nowrap">
                        {item.category}
                      </td>
                      <td className="py-3 px-4 text-[#250902]">
                        <span className="font-semibold block text-[#250902]">
                          {item.title}
                        </span>
                        <span className="text-xs text-[#250902]/60 block font-normal">
                          {item.description}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-xs">
                        <code className="text-[#250902] bg-[#F7F4F3] px-2 py-0.5 rounded border border-[#EAE5E3] block text-left">
                          {item.remediationExample}
                        </code>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="py-3 px-4 bg-[#F7F4F3] border-t border-[#EAE5E3] flex items-center justify-between text-xs font-mono text-[#640D14]">
            <span>Showing {filteredCodes.length} of {DIAGNOSTIC_CODES.length} verified rules</span>
            <span className="text-[#800E13] font-semibold">Dextora Core v0.1.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
