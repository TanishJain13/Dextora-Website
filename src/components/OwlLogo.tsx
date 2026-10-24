import React from "react";

export interface OwlLogoProps {
  /**
   * "primary": Full refined geometric owl identity with signature aperture eyes,
   *            sharp eyebrows, and faceted wing/chest architecture.
   * "compact": High-legibility mark optimized for small surfaces (nav, favicon, 16px/24px/32px/64px).
   */
  variant?: "primary" | "compact";
  /**
   * Size presets or custom px number:
   * "xs" = 16px, "sm" = 24px, "md" = 32px, "lg" = 48px, "xl" = 64px, "2xl" = 96px, "hero" = 140px
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "hero" | number;
  /**
   * Visual theme:
   * "crimson" (default): #800E13 deep crimson outline with #AD2831 pupil accents
   * "white": pure white outline with white/translucent pupils (for dark/crimson surfaces)
   * "monochrome": #250902 deepest charcoal outline
   * "light-on-dark": white on black cherry / dark charcoal
   */
  theme?: "crimson" | "white" | "monochrome" | "light-on-dark";
  className?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
  /**
   * Optional version badge beside wordmark
   */
  showVersion?: boolean;
}

export function OwlLogo({
  variant = "compact",
  size = "md",
  theme = "crimson",
  className = "",
  showWordmark = false,
  wordmarkClassName = "",
  showVersion = false,
}: OwlLogoProps) {
  // Size resolver
  const sizeMap: Record<string, number> = {
    xs: 18,
    sm: 24,
    md: 32,
    lg: 44,
    xl: 60,
    "2xl": 88,
    hero: 140,
  };

  const pixelSize = typeof size === "number" ? size : sizeMap[size] || 32;

  // Palette resolver based on brand specs
  let strokeColor = "#800E13"; // Primary deep crimson
  let accentColor = "#AD2831"; // Crimson red accent (pupils, focal center)
  let wordmarkColor = "text-[#250902]";
  let badgeColor = "bg-[#FDF2F2] text-[#800E13] border-[#F9C0C3]";

  if (theme === "white") {
    strokeColor = "#FFFFFF";
    accentColor = "#FFFFFF";
    wordmarkColor = "text-white";
    badgeColor = "bg-white/15 text-white border-white/20";
  } else if (theme === "light-on-dark") {
    strokeColor = "#FFFFFF";
    accentColor = "#F9C0C3";
    wordmarkColor = "text-white";
    badgeColor = "bg-white/10 text-[#FDE5E6] border-white/20";
  } else if (theme === "monochrome") {
    strokeColor = "#250902";
    accentColor = "#250902";
    wordmarkColor = "text-[#250902]";
    badgeColor = "bg-[#F7F4F3] text-[#250902] border-[#EAE5E3]";
  }

  // Wordmark size scaling based on mark size
  const wordmarkTextSize =
    pixelSize <= 24
      ? "text-sm"
      : pixelSize <= 36
      ? "text-base"
      : pixelSize <= 50
      ? "text-lg"
      : "text-2xl";

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Owl Vector Silhouette */}
      <div
        style={{ width: pixelSize, height: pixelSize }}
        className="relative shrink-0 flex items-center justify-center"
      >
        {variant === "compact" ? (
          /* =================================================================
             COMPACT OWL LOGO MARK (16px, 24px, 32px, 64px)
             Crisp, high-legibility geometric owl mark.
             Retains signature sharp ear tufts, intense focused aperture eyes,
             and confident diagnostic gaze without clutter.
             ================================================================= */
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-label="Dextora Owl Logo Mark"
          >
            {/* Outer Head Silhouette & Ear Tufts */}
            <path
              d="M7 11C9 14.5 13 16 16.5 15.5C18.8 15.2 21.5 14 24 14C26.5 14 29.2 15.2 31.5 15.5C35 16 39 14.5 41 11C39.5 17 38.5 21 39 26C39.5 31.5 37 38 31 41.5C28.5 43 26.2 43.5 24 43.5C21.8 43.5 19.5 43 17 41.5C11 38 8.5 31.5 9 26C9.5 21 8.5 17 7 11Z"
              stroke={strokeColor}
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Inner Crown Arch */}
            <path
              d="M12 14.5C15.5 18 19.5 18.5 24 18.5C28.5 18.5 32.5 18 36 14.5"
              stroke={strokeColor}
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Sharp Angular Eyebrows (The Signature V-Gaze) */}
            <path
              d="M11 20.5L24 25.5L37 20.5"
              stroke={strokeColor}
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Left Eye Aperture Ring */}
            <circle
              cx="17.5"
              cy="28"
              r="6.5"
              stroke={strokeColor}
              strokeWidth="2.4"
            />
            {/* Left Eye Pupil (Focused, intense) */}
            <circle cx="17.5" cy="27.5" r="2.8" fill={accentColor} />

            {/* Right Eye Aperture Ring */}
            <circle
              cx="30.5"
              cy="28"
              r="6.5"
              stroke={strokeColor}
              strokeWidth="2.4"
            />
            {/* Right Eye Pupil */}
            <circle cx="30.5" cy="27.5" r="2.8" fill={accentColor} />

            {/* Sharp Triangular Beak */}
            <path
              d="M21.5 26.5L24 33.5L26.5 26.5"
              fill={strokeColor}
              stroke={strokeColor}
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* Base Perch Chevron */}
            <path
              d="M20 37.5L24 41L28 37.5"
              stroke={strokeColor}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          /* =================================================================
             PRIMARY DETAILED OWL LOGO (Editorial, Large Display, Branding)
             Faithfully inspired by the reference line-art owl:
             - Distinctive sharp angular eyebrows meeting at the beak
             - Large focused concentric eyes with radar/aperture quadrant segments
             - Symmetrical faceted chest & wing geometry
             - Elegant perched talons and tapered feather silhouette
             ================================================================= */
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-label="Dextora Primary Owl Logo"
          >
            {/* Outer Ear Tufts & Silhouette */}
            <path
              d="M18 24C24 32 34 35 44 34C51 33.2 56 31 60 31C64 31 69 33.2 76 34C86 35 96 32 102 24C98 38 96 46 98 58C100 72 94 88 80 97C74 101 67 103 60 104C53 103 46 101 40 97C26 88 20 72 22 58C24 46 22 38 18 24Z"
              stroke={strokeColor}
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Crown Arch Lines */}
            <path
              d="M30 32C38 40 48 41 60 41C72 41 82 40 90 32"
              stroke={strokeColor}
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M24 26C34 32 46 36 60 36C74 36 86 32 96 26"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Furrowed Brow / Sharp Eyebrow Structure */}
            <path
              d="M25 43L60 55L95 43"
              stroke={strokeColor}
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30 46L60 57.5L90 46"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* LEFT EYE COMPLEX (Concentric Aperture Radar Geometry) */}
            {/* Outer Left Ring */}
            <circle
              cx="44"
              cy="60"
              r="15"
              stroke={strokeColor}
              strokeWidth="3"
            />
            {/* Mid Left Ring */}
            <circle
              cx="44"
              cy="60"
              r="10"
              stroke={strokeColor}
              strokeWidth="2"
            />
            {/* Quadrant Aperture Rays (Crosshairs) */}
            <line
              x1="44"
              y1="45"
              x2="44"
              y2="50"
              stroke={strokeColor}
              strokeWidth="2"
            />
            <line
              x1="44"
              y1="70"
              x2="44"
              y2="75"
              stroke={strokeColor}
              strokeWidth="2"
            />
            <line
              x1="29"
              y1="60"
              x2="34"
              y2="60"
              stroke={strokeColor}
              strokeWidth="2"
            />
            <line
              x1="54"
              y1="60"
              x2="59"
              y2="60"
              stroke={strokeColor}
              strokeWidth="2"
            />
            {/* Diagonal Quadrants */}
            <line
              x1="34"
              y1="50"
              x2="37"
              y2="53"
              stroke={strokeColor}
              strokeWidth="1.8"
            />
            <line
              x1="51"
              y1="67"
              x2="54"
              y2="70"
              stroke={strokeColor}
              strokeWidth="1.8"
            />
            {/* Left Eye Pupil (Focused, bold crimson) */}
            <circle cx="44" cy="59" r="6" fill={accentColor} />

            {/* RIGHT EYE COMPLEX (Concentric Aperture Radar Geometry) */}
            {/* Outer Right Ring */}
            <circle
              cx="76"
              cy="60"
              r="15"
              stroke={strokeColor}
              strokeWidth="3"
            />
            {/* Mid Right Ring */}
            <circle
              cx="76"
              cy="60"
              r="10"
              stroke={strokeColor}
              strokeWidth="2"
            />
            {/* Quadrant Aperture Rays */}
            <line
              x1="76"
              y1="45"
              x2="76"
              y2="50"
              stroke={strokeColor}
              strokeWidth="2"
            />
            <line
              x1="76"
              y1="70"
              x2="76"
              y2="75"
              stroke={strokeColor}
              strokeWidth="2"
            />
            <line
              x1="61"
              y1="60"
              x2="66"
              y2="60"
              stroke={strokeColor}
              strokeWidth="2"
            />
            <line
              x1="86"
              y1="60"
              x2="91"
              y2="60"
              stroke={strokeColor}
              strokeWidth="2"
            />
            {/* Diagonal Quadrants */}
            <line
              x1="83"
              y1="53"
              x2="86"
              y2="50"
              stroke={strokeColor}
              strokeWidth="1.8"
            />
            <line
              x1="66"
              y1="70"
              x2="69"
              y2="67"
              stroke={strokeColor}
              strokeWidth="1.8"
            />
            {/* Right Eye Pupil */}
            <circle cx="76" cy="59" r="6" fill={accentColor} />

            {/* Sharp Triangular Beak */}
            <path
              d="M55 57L60 74L65 57"
              fill={strokeColor}
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Geometric Chest Chevron & Facets */}
            {/* Throat Collar */}
            <path
              d="M48 76L60 84L72 76"
              stroke={strokeColor}
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M42 83L60 94L78 83"
              stroke={strokeColor}
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Vertical Diagnostic Spine */}
            <line
              x1="60"
              y1="74"
              x2="60"
              y2="104"
              stroke={strokeColor}
              strokeWidth="2.4"
              strokeLinecap="round"
            />

            {/* Wing Feather Contours (Left) */}
            <path
              d="M24 64C28 76 34 88 44 95"
              stroke={strokeColor}
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M29 76C34 85 40 92 48 98"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Wing Feather Contours (Right) */}
            <path
              d="M96 64C92 76 86 88 76 95"
              stroke={strokeColor}
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M91 76C86 85 80 92 72 98"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Perched Talons at Base */}
            {/* Left Talon */}
            <path
              d="M44 98L42 104M47 99L47 106M50 99L52 105"
              stroke={strokeColor}
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            {/* Right Talon */}
            <path
              d="M76 98L78 104M73 99L73 106M70 99L68 105"
              stroke={strokeColor}
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      {/* Paired Wordmark */}
      {showWordmark && (
        <div className="flex items-center gap-2">
          <span
            className={`font-mono font-bold tracking-tight lowercase ${wordmarkTextSize} ${wordmarkColor} ${wordmarkClassName}`}
          >
            dextora
          </span>
          {showVersion && (
            <span
              className={`text-[10px] font-mono px-1.5 py-0.5 rounded border font-semibold ${badgeColor}`}
            >
              v0.1.0
            </span>
          )}
        </div>
      )}
    </div>
  );
}
