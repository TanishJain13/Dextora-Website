import React from "react";

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Subtle warm-white background pedestal */}
      <div className="relative rounded-2xl border border-[#EAE5E3] bg-[#F7F4F3]/90 p-3 sm:p-5 shadow-subtle overflow-hidden">
        {/* Subtle technical background grid */}
        <svg
          viewBox="0 0 600 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-sm"
          aria-label="Editorial illustration of the Dextora owl observing project dependency network"
        >
          {/* Subtle Technical Grid Lines */}
          <line x1="40" y1="220" x2="560" y2="220" stroke="#E9E3E2" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="300" y1="40" x2="300" y2="400" stroke="#E9E3E2" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="300" cy="220" r="160" stroke="#E9E3E2" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="300" cy="220" r="90" stroke="#E9E3E2" strokeWidth="1" />

          {/* =================================================================
              OBSERVATION SCAN BEAM
              Subtle crimson radial beam connecting the owl's focused gaze
              directly to the highlighted detected issue (GIT003).
             ================================================================= */}
          <path
            d="M300 85 L445 275"
            stroke="#AD2831"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="animate-trace-beam"
          />
          {/* Diagnostic Aperture Scan Cone */}
          <polygon
            points="300,85 410,250 490,265"
            fill="#AD2831"
            fillOpacity="0.06"
          />

          {/* Interconnected Project Dependency Network Paths */}
          <path d="M125 150 L300 85 L475 145" stroke="#640D14" strokeWidth="1.2" strokeOpacity="0.3" />
          <path d="M125 150 L140 280 L300 370 L445 285" stroke="#640D14" strokeWidth="1.2" strokeOpacity="0.3" />
          <path d="M475 145 L445 285" stroke="#800E13" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M140 280 L445 285" stroke="#E9E3E2" strokeWidth="1.2" strokeDasharray="4 4" />

          {/* =================================================================
              CENTRAL OBSERVING OWL (The Vigilant Diagnostician)
              Symmetrical, sharp eyebrows, focused aperture radar eyes.
             ================================================================= */}
          <g transform="translate(255, 20)">
            {/* Ambient subtle badge backing */}
            <circle cx="45" cy="45" r="42" fill="#FFFFFF" stroke="#800E13" strokeWidth="1.5" />
            
            {/* The Scaled Owl Geometry */}
            <g transform="translate(15, 12) scale(0.65)">
              {/* Outer Head & Tufts */}
              <path
                d="M7 11C9 14.5 13 16 16.5 15.5C18.8 15.2 21.5 14 24 14C26.5 14 29.2 15.2 31.5 15.5C35 16 39 14.5 41 11C39.5 17 38.5 21 39 26C39.5 31.5 37 38 31 41.5C28.5 43 26.2 43.5 24 43.5C21.8 43.5 19.5 43 17 41.5C11 38 8.5 31.5 9 26C9.5 21 8.5 17 7 11Z"
                stroke="#800E13"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#FFFFFF"
              />
              {/* Crown */}
              <path
                d="M12 14.5C15.5 18 19.5 18.5 24 18.5C28.5 18.5 32.5 18 36 14.5"
                stroke="#800E13"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* V-Eyebrows */}
              <path
                d="M11 20.5L24 25.5L37 20.5"
                stroke="#800E13"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Left Eye */}
              <circle cx="17.5" cy="28" r="6.5" stroke="#800E13" strokeWidth="2.8" />
              <circle cx="17.5" cy="27.5" r="3" fill="#AD2831" />
              {/* Right Eye */}
              <circle cx="30.5" cy="28" r="6.5" stroke="#800E13" strokeWidth="2.8" />
              <circle cx="30.5" cy="27.5" r="3" fill="#AD2831" />
              {/* Beak */}
              <path d="M21.5 26.5L24 33.5L26.5 26.5" fill="#800E13" stroke="#800E13" strokeWidth="1.2" strokeLinejoin="round" />
              {/* Perch */}
              <path d="M20 37.5L24 41L28 37.5" stroke="#800E13" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Diagnostic Observation Label */}
            <rect x="5" y="86" width="80" height="20" rx="10" fill="#250902" />
            <circle cx="15" cy="96" r="3" fill="#AD2831" />
            <text x="23" y="100" fill="#FFFFFF" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700">
              OBSERVING
            </text>
          </g>

          {/* =================================================================
              NETWORK NODE 1: pyproject.toml (Top Left)
             ================================================================= */}
          <g transform="translate(60, 125)">
            <rect width="130" height="50" rx="10" fill="#FFFFFF" stroke="#EAE5E3" strokeWidth="1.5" />
            <circle cx="18" cy="25" r="5" fill="#800E13" />
            <text x="30" y="22" fill="#250902" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="600">
              pyproject.toml
            </text>
            <text x="30" y="36" fill="#800E13" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700">
              STR002 MANIFEST
            </text>
          </g>

          {/* =================================================================
              NETWORK NODE 2: .venv/bin/python (Top Right)
             ================================================================= */}
          <g transform="translate(415, 120)">
            <rect width="135" height="50" rx="10" fill="#FFFFFF" stroke="#EAE5E3" strokeWidth="1.5" />
            <circle cx="18" cy="25" r="5" fill="#800E13" />
            <text x="30" y="22" fill="#250902" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="600">
              .venv/bin/python
            </text>
            <text x="30" y="36" fill="#800E13" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700">
              PY000 ACTIVE (3.11)
            </text>
          </g>

          {/* =================================================================
              NETWORK NODE 3: .env.example (Bottom Left)
             ================================================================= */}
          <g transform="translate(75, 260)">
            <rect width="130" height="50" rx="10" fill="#FFFFFF" stroke="#EAE5E3" strokeWidth="1.5" />
            <circle cx="18" cy="25" r="5" fill="#800E13" />
            <text x="30" y="22" fill="#250902" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="600">
              .env.example
            </text>
            <text x="30" y="36" fill="#655B5B" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="600">
              ENV TEMPLATE OK
            </text>
          </g>

          {/* =================================================================
              NETWORK NODE 4: HIGHLIGHTED DETECTED ISSUE (Bottom Right)
              GIT003: Sensitive .env tracked in Git index.
              Highlighted in Crimson Red (#AD2831) with warning ripple ring.
             ================================================================= */}
          <g transform="translate(365, 255)">
            {/* Warning Ripple Ring */}
            <rect
              x="-6"
              y="-6"
              width="182"
              height="68"
              rx="16"
              fill="none"
              stroke="#AD2831"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              className="animate-pulse-ring"
            />
            {/* Card Body */}
            <rect
              width="170"
              height="56"
              rx="12"
              fill="#FFFFFF"
              stroke="#AD2831"
              strokeWidth="2"
            />
            {/* Active Finding Pulse Dot */}
            <circle cx="20" cy="28" r="6" fill="#AD2831" />
            <circle cx="20" cy="28" r="2.5" fill="#FFFFFF" />

            <text x="34" y="23" fill="#250902" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">
              .env (Staged in Git)
            </text>
            <text x="34" y="38" fill="#AD2831" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="800">
              GIT003 DETECTED ISSUE
            </text>
          </g>

          {/* =================================================================
              REMEDIATION HINT / CONTEXT CARD (Bottom Center)
              Direct line from the highlighted issue to remediation action.
             ================================================================= */}
          <path
            d="M450 311 L450 355 L385 355"
            stroke="#800E13"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />

          <g transform="translate(170, 345)">
            <rect width="210" height="42" rx="8" fill="#250902" stroke="#38040E" strokeWidth="1" />
            <text x="14" y="18" fill="#F9C0C3" fontSize="8" fontFamily="ui-monospace, monospace" fontWeight="700">
              REMEDIATION EVIDENCE:
            </text>
            <text x="14" y="31" fill="#FFFFFF" fontSize="9.5" fontFamily="ui-monospace, monospace" fontWeight="600">
              git rm --cached .env
            </text>
            <rect x="155" y="10" width="45" height="22" rx="4" fill="#800E13" />
            <text x="162" y="24" fill="#FFFFFF" fontSize="8" fontFamily="ui-monospace, monospace" fontWeight="700">
              CONFIRMED
            </text>
          </g>
        </svg>

        {/* Technical Footer Caption */}
        <div className="pt-2 px-1 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#655B5B] border-t border-[#EAE5E3] mt-2 gap-2">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#800E13]" />
            <span>AST &amp; Manifest Lexer</span>
          </span>
          <span className="text-[#800E13] font-semibold">
            Zero Network Traversal • 18ms Scan
          </span>
        </div>
      </div>
    </div>
  );
}
