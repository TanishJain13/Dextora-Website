import React from "react";
import { OwlLogo } from "./OwlLogo";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "compact" | "primary";
  showVersion?: boolean;
  className?: string;
  theme?: "light" | "dark" | "crimson" | "monochrome";
}

export function Logo({
  size = "md",
  variant = "compact",
  showVersion = false,
  className = "",
  theme = "light",
}: LogoProps) {
  const owlTheme =
    theme === "dark"
      ? "light-on-dark"
      : theme === "crimson"
      ? "white"
      : theme === "monochrome"
      ? "monochrome"
      : "crimson";

  return (
    <OwlLogo
      size={size}
      variant={variant}
      theme={owlTheme}
      showWordmark={true}
      showVersion={showVersion}
      className={className}
    />
  );
}
