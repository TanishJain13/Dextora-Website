export interface DemoScenario {
  id: string;
  name: string;
  badge: string;
  command: string;
  description: string;
  targetPath: string;
  projectType: string;
  checksRun: number;
  exitCode: number;
  isJson?: boolean;
  content: string;
  summary: {
    errors: number;
    warnings: number;
    info: number;
    passed: number;
  };
}

export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: "issues-detected",
    name: "Standard Scan (Issues Found)",
    badge: "2 Warnings",
    command: "dextora doctor .",
    description: "Evaluates project setup, identifies missing virtualenv, missing .env template, and correlates findings.",
    targetPath: "D:\\Projects\\ecommerce-api",
    projectType: "Fullstack (FastAPI + Next.js)",
    checksRun: 8,
    exitCode: 0,
    summary: {
      errors: 0,
      warnings: 2,
      info: 0,
      passed: 2,
    },
    content: `+------------------------------------------------+
| Dextora v0.1.0 - Developer Diagnostics Toolkit |
| Target:       D:\\Projects\\ecommerce-api       |
| Project Type: Fullstack (FastAPI + Next.js)    |
| Checks Run:   8                                |
+------------------------------------------------+

>>> WARNINGS (2)
----------------------------------------
[PY001] No Python virtual environment detected
  Why:      Python projects should use an isolated virtual environment to prevent dependency pollution.
  Evidence: Looked for: .venv, venv, env in project root.
  Fix:      Create a virtual environment with 'python -m venv .venv' and activate it.
  Command:  python -m venv .venv

[ENV001] Environment template '.env.example' present but '.env' is missing (.env.example)
  Why:      The project provides '.env.example' as an environment template, but no local '.env' file was found.
  Evidence: Template: .env.example
  Fix:      Copy '.env.example' to '.env' and fill in the required local configuration values.
  Command:  cp .env.example .env

>>> SUCCESSES (2)
----------------------------------------
[STR002] Project manifest detected (pyproject.toml, package.json)
  Why:      Identified Python and JavaScript project configuration manifests.
  Evidence: pyproject.toml, package.json
  Fix:      No action required.

[JS000] Consistent JavaScript package manager lockfile detected (pnpm-lock.yaml)
  Why:      Single consistent lockfile detected for pnpm package manager.
  Evidence: pnpm-lock.yaml
  Fix:      No action required.

>>> ROOT CAUSE ANALYSIS (1)
----------------------------------------
  Probable Root Cause: [ENV001] Environment template '.env.example' present but '.env' is missing
  Secondary Symptoms:  Unconfigured database credentials, missing runtime secrets
  Relationship:        New checkout or cloned environment without local initialization

 Diagnostic Summary
  Severity    Count
  Errors          0
  Warnings        2
  Info            0
  Successes       2

[!] Scan completed with 2 warning(s). Review the suggestions above.`,
  },
  {
    id: "clean-project",
    name: "Clean & Verified Project",
    badge: "100% Passing",
    command: "dextora doctor .",
    description: "Runs all 6 check suites across a fully synchronized, healthy repository.",
    targetPath: "D:\\Projects\\cloud-microservice",
    projectType: "Python (FastAPI)",
    checksRun: 6,
    exitCode: 0,
    summary: {
      errors: 0,
      warnings: 0,
      info: 0,
      passed: 4,
    },
    content: `+------------------------------------------------+
| Dextora v0.1.0 - Developer Diagnostics Toolkit |
| Target:       D:\\Projects\\cloud-microservice   |
| Project Type: Python (FastAPI)                 |
| Checks Run:   6                                |
+------------------------------------------------+

>>> SUCCESSES (4)
----------------------------------------
[STR002] Project manifest detected (pyproject.toml)
  Why:      Identified Python project configuration manifests.
  Evidence: pyproject.toml
  Fix:      No action required.

[PY000] Active virtual environment located (.venv)
  Why:      Isolated virtual environment found and verified.
  Evidence: .venv (Python 3.11.8)
  Fix:      No action required.

[ENV000] .env variables fully synchronized with template (.env)
  Why:      All keys declared in .env.example are present in local .env.
  Evidence: Verified 7 variables without reading secret values.
  Fix:      No action required.

[ENV004] Valid .dextora.toml configuration loaded (.dextora.toml)
  Why:      Project configuration loaded successfully.
  Evidence: .dextora.toml (fail_on = "ERROR")
  Fix:      No action required.

 Diagnostic Summary
  Severity    Count
  Errors          0
  Warnings        0
  Info            0
  Successes       4

[✔] No issues detected. Project setup looks healthy!`,
  },
  {
    id: "strict-ci-mode",
    name: "Strict CI Mode",
    badge: "Exit Code 1",
    command: "dextora doctor . --strict",
    description: "Fails CI immediately if any warning or error is surfaced in the codebase.",
    targetPath: "D:\\Projects\\payment-gateway",
    projectType: "Python (Django)",
    checksRun: 7,
    exitCode: 1,
    summary: {
      errors: 1,
      warnings: 1,
      info: 0,
      passed: 1,
    },
    content: `+------------------------------------------------+
| Dextora v0.1.0 - Developer Diagnostics Toolkit |
| Target:       D:\\Projects\\payment-gateway     |
| Project Type: Python (Django)                  |
| Checks Run:   7                                |
+------------------------------------------------+

>>> ERRORS (1)
----------------------------------------
[GIT003] Sensitive file tracked in Git index (.env)
  Why:      A sensitive configuration file is actively tracked in Git version control.
  Evidence: git ls-files returned tracked '.env'
  Fix:      Remove the file from git tracking without deleting it from disk: git rm --cached .env
  Command:  git rm --cached .env

>>> WARNINGS (1)
----------------------------------------
[DEP008] Unpinned dependencies detected in requirements.txt (requirements.txt)
  Why:      Unpinned dependencies can lead to non-reproducible builds across machines.
  Evidence: celery (no version specifier)
  Fix:      Pin dependencies with exact versions (e.g. celery==5.3.6).

>>> SUCCESSES (1)
----------------------------------------
[STR002] Project manifest detected (pyproject.toml)
  Why:      Standard project manifest detected.
  Evidence: pyproject.toml
  Fix:      No action required.

 Diagnostic Summary
  Severity    Count
  Errors          1
  Warnings        1
  Info            0
  Successes       1

[X] Scan completed with 1 error(s). Action is required to ensure a healthy environment.
Process exited with code 1 (--strict mode active).`,
  },
  {
    id: "json-mode",
    name: "Machine JSON Output",
    badge: "--json",
    command: "dextora doctor . --json",
    description: "Machine-readable structured JSON payload without formatting markup for automated CI pipelines.",
    targetPath: "D:\\Projects\\sample-app",
    projectType: "Python",
    checksRun: 6,
    exitCode: 0,
    isJson: true,
    summary: {
      errors: 0,
      warnings: 2,
      info: 0,
      passed: 1,
    },
    content: `{
  "version": "0.1.0",
  "target_path": "D:\\\\Projects\\\\sample-app",
  "project_type": "Python",
  "checks_run": 6,
  "summary": {
    "ERROR": 0,
    "WARNING": 2,
    "INFO": 0,
    "SUCCESS": 1
  },
  "findings": [
    {
      "code": "PY001",
      "severity": "WARNING",
      "title": "No Python virtual environment detected",
      "explanation": "Python projects should use an isolated virtual environment to prevent dependency pollution.",
      "evidence": "Looked for: .venv, venv, env in project root.",
      "fix": "Create a virtual environment with 'python -m venv .venv' and activate it.",
      "file_path": null,
      "remediation": {
        "command": "python -m venv .venv",
        "manual_review_required": false
      }
    },
    {
      "code": "ENV001",
      "severity": "WARNING",
      "title": "Environment template '.env.example' present but '.env' is missing",
      "explanation": "The project provides '.env.example' as an environment template, but no local '.env' file was found.",
      "evidence": "Template: .env.example",
      "fix": "Copy '.env.example' to '.env' and fill in the required local configuration values.",
      "file_path": ".env.example",
      "remediation": {
        "command": "cp .env.example .env",
        "manual_review_required": false
      }
    },
    {
      "code": "STR002",
      "severity": "SUCCESS",
      "title": "Project manifest detected",
      "explanation": "Identified Python project configuration manifests.",
      "evidence": "pyproject.toml",
      "fix": "No action required.",
      "file_path": "pyproject.toml",
      "remediation": null
    }
  ]
}`,
  },
];
