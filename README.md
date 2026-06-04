# MUSTER

Local Church Operations, Care, Readiness, and Continuity System.

MUSTER is a locally hostable, desktop-first operations platform for church deacons. It coordinates household care, resources, commitments, interventions, preparedness, threats, disaster response, property upkeep, assets, reporting, and secure family communication.

This repository is a repo-ready scaffold for Copilot/Codex-driven implementation. It intentionally starts with a TypeScript React PWA, local-first browser storage, mock/seed data, clear domain types, a security boundary, and documentation. It does not depend on external paid services.

## Product doctrine

MUSTER is not a generic charity CRM. It is a deacon-centered operational command system.

Every household known. Every resource mustered. Every need assigned. Every threat watched. Every asset maintained. Every commitment tracked. Every case followed through. Every disruption prepared for.

## Architecture now

- React + TypeScript + Vite
- Desktop-first PWA
- Local-first mock repository using localStorage
- Strongly typed domain model
- Role and permission guard scaffold
- Crypto/security abstraction scaffold for future end-to-end encryption
- Seed data so the app runs immediately
- Offline app shell via service worker

## Architecture later

- Locally hosted API server
- PostgreSQL
- Docker Compose
- Encrypted backups
- Device authorization
- E2EE household-to-deacon messaging
- Field apps for visits and disaster check-ins

## Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Commands

```bash
npm run dev
npm run typecheck
npm run lint
npm run test
npm run build
npm run preview
```

## Repository layout

```text
src/app             App shell and route definitions
src/components      Reusable UI components
src/data            Seed data and local repository
src/domain          Domain logic and selectors
src/lib             Security, crypto, storage, sync, dates
src/pages           Desktop command and family/field app pages
src/styles          Global CSS
src/types           Core entity and permission types
public              PWA manifest and service worker
schema              SQL schema draft for later local backend
scripts             Developer scripts
specs               Acceptance criteria and implementation notes
```

## Local hosting principle

The church owns the system and the data. This scaffold avoids external SaaS dependencies. Future server work should preserve LAN/VPN/local deployment as the default.

## Security note

This scaffold includes a crypto interface and a demonstrative browser crypto adapter. It is not production E2EE yet. Production E2EE must be reviewed before real sensitive church data is stored.
