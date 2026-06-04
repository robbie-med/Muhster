# Testing Plan

## Unit tests

Risk scoring
Permission checks
Report generation
Selectors
Date utilities
Crypto adapters

## Functional tests

Import households
Assign deacons
Create resources
Create commitments
Create needs
Verify needs
Create cases
Log interventions
Generate reports
Reset seed data

## Permission tests

Household cannot view other households.
Deacon cannot read unrelated sensitive elder-only data.
Benevolence data is restricted.
Security-sensitive threat data is restricted.
Audit logs record sensitive record access.

## E2EE tests

Encrypted message body is not readable in database.
Authorized device can decrypt.
Revoked device cannot decrypt new messages.
Attachments are encrypted before upload.

## Disaster tests

Activate disaster mode.
Request check-ins.
Mark unknown households.
Assign physical checks.
Export disaster brief.

## Accessibility tests

Keyboard navigation
Visible focus states
Semantic tables
Accessible button labels
Sufficient contrast
Reduced motion tolerance
