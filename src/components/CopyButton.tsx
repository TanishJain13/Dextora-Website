"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
  iconOnly?: boolean;
}

export function CopyButton({ text, label, className = "", iconOnly = false }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for environments where clipboard API might be restricted
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      aria-label={copied ? "Copied to clipboard" : `Copy ${text} to clipboard`}
      title={copied ? "Copied!" : "Copy to clipboard"}
      className={`inline-flex items-center gap-1.5 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 select-none ${className}`}
    >
      {copied ? (
        <>
          <Check className="size-3.5 text-brand-400 stroke-[2.5]" aria-hidden="true" />
          {!iconOnly && <span className="text-brand-300 font-mono text-xs font-semibold">Copied!</span>}
        </>
      ) : (
        <>
          <Copy className="size-3.5 text-zinc-400 hover:text-white transition-colors" aria-hidden="true" />
          {!iconOnly && (
            <span className="text-zinc-300 text-xs font-mono">{label || "Copy"}</span>
          )}
        </>
      )}
    </button>
  );
}
