# Architecture

MUSTER is a locally hosted, desktop-first operations platform with narrow field apps and a lightweight family app.

## Current scaffold

The current repo is a React/TypeScript/Vite PWA. It uses localStorage as a mock local repository and seed data so the command center runs immediately.

## Target architecture

```text
Browser desktop client
Family PWA
Field PWAs
        |
Local HTTPS reverse proxy
        |
Local API server
        |
PostgreSQL + encrypted file storage
        |
Encrypted local/offline backups
```

## Local hosting

Default deployment is church-controlled hardware on LAN, optionally reachable through VPN. External cloud services are not required for the core product.

## App boundaries

Desktop Command:
Source of truth for deacons, elders, property/security leads, and administrators.

Family App:
Household-only access for check-ins, needs, resource updates, commitment responses, and encrypted communication.

Field Apps:
Task-specific tools for visits, disaster checks, meals, transport, work crews, security, and inventory.

## Module separation

UI lives in `src/components` and `src/pages`.
Domain logic lives in `src/domain`.
Security and crypto boundaries live in `src/lib`.
Entity types live in `src/types`.
Persistence lives in `src/data`.
