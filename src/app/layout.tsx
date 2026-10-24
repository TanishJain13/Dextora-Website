import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dextora.vercel.app"),
  title: "Dextora | Deterministic Project Setup & Environment Diagnostics for Python",
  description:
    "Dextora is an open-source, MIT-licensed Python CLI diagnostics toolkit that identifies project setup, dependency conflicts, environment drift, and git issues before they break development builds.",
  keywords: [
    "dextora",
    "dextora pypi",
    "python cli linter",
    "developer diagnostics",
    "virtualenv diagnostics",
    "python project doctor",
    "dependency conflicts",
    "local-first linter",
    "root cause analysis",
  ],
  authors: [{ name: "Tanish Jain", url: "https://github.com/TanishJain13" }],
  creator: "Tanish Jain",
  publisher: "Dextora Open Source",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dextora.vercel.app",
    siteName: "Dextora",
    title: "Dextora | Find the problem. Fix the root cause.",
    description:
      "Open-source Python CLI toolkit for diagnosing project setup, dependencies, environment configuration, and version control issues.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dextora Developer Diagnostics Toolkit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dextora | Developer Diagnostics Toolkit",
    description:
      "Diagnose project setup, dependency, environment, and version control issues from your terminal.",
    images: ["/og-image.png"],
    creator: "@TanishJain13",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Dextora",
    operatingSystem: "Windows, macOS, Linux",
    applicationCategory: "DeveloperApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "A Python CLI toolkit for diagnosing project setup, dependencies, environment configuration, and common development issues.",
    url: "https://dextora.vercel.app",
    softwareVersion: "0.1.0",
    license: "https://opensource.org/licenses/MIT",
    author: {
      "@type": "Person",
      name: "Tanish Jain",
      url: "https://github.com/TanishJain13",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-zinc-900 antialiased font-sans min-h-screen flex flex-col selection:bg-zinc-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
