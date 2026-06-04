# Data Model

The model is centered around the local church body.

## Core entities

Household: canonical family/member unit.
Resource: concrete capacity owned by a household or church.
Commitment: concrete recurring responsibility accepted by a household.
Need: operational ticket requiring verification.
CareCase: structured care operation created from a need.
Intervention: logged action taken on a case.
Threat: risk to the local body, property, continuity, or operations.
DisasterProfile: household readiness and disaster status.
WorkOrder: property upkeep item.
Asset: equipment, property, or inventory item.
MessageThread: encrypted communication boundary.
AuditLogEntry: access and change record.

## Important design rules

A household can both receive care and owe care.
A need is not automatically a case.
A care case must have a lead deacon and resolution criteria.
A commitment must have a status and review date.
Threats are scored by likelihood x impact.
Disaster mode relies on household status plus physical-check assignments.
Sensitive records require permission and audit.

The TypeScript source of truth is `src/types/domain.ts`.
The future PostgreSQL schema draft is `schema/001_initial.sql`.
