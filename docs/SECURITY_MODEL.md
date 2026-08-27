# Security Model

## Repository

The GitHub repository remains private during development. Do not commit secrets, API keys, credentials, or private archival originals.

## Environments

Separate development and production configuration. Secrets belong in the hosting/database secret stores, never in source control.

## Archive access

Use role-based access for editorial/admin functions. Public visitors receive only published records and explicitly public media.

## Media

Original/private media should be stored outside Git history. Public derivatives can be published with rights metadata and stable references.

## Backups

The production archive must have an independent backup/export strategy so the historical collection is not dependent on one vendor.
