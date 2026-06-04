# Security Model

MUSTER handles sensitive church operational data. Security is a core product requirement, not an add-on.

## Local-first security

The church owns the server, database, backups, and access policy. Default deployment is LAN or LAN plus VPN.

## Required controls

Role-based access control
Record-level permissions
Field sensitivity labels
Audit logs
Encrypted backups
Encrypted file storage
Device authorization for field/family apps
Session timeout
Emergency access process
Admin access review

## Sensitive classes

General
Deacon-only
Lead-deacon-only
Elder-only
Benevolence
Medical-sensitive
Family-sensitive
Security-sensitive
Child-safety
Legal
Disaster
Property-security

## End-to-end encryption

E2EE is required for household-to-deacon communication and sensitive family app submissions.

Target model:

- Public/private key per user or device
- Household encryption identity
- Symmetric key per thread
- Thread key encrypted to each authorized recipient
- Client-side encryption before upload
- Server stores ciphertext and operational metadata
- Attachments encrypted before upload

## Metadata reality

E2EE protects message content, not all metadata. The server may still know sender, recipient, timestamp, thread, household, case, and message size.

## Current scaffold status

The scaffold includes a demonstrative Web Crypto adapter in `src/lib/crypto.ts`. It is not production E2EE. It exists to preserve the correct boundary and development direction.
