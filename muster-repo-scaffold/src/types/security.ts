export type Role =
  | 'admin'
  | 'lead_deacon'
  | 'deacon'
  | 'elder'
  | 'benevolence_officer'
  | 'property_lead'
  | 'security_lead'
  | 'household_user'
  | 'auditor';

export type Sensitivity =
  | 'general'
  | 'deacon_only'
  | 'lead_deacon_only'
  | 'elder_only'
  | 'benevolence'
  | 'medical_sensitive'
  | 'family_sensitive'
  | 'security_sensitive'
  | 'child_safety'
  | 'legal'
  | 'disaster'
  | 'property_security';

export type PermissionAction = 'create' | 'read' | 'update' | 'delete' | 'export' | 'assign' | 'escalate';

export type ModuleKey =
  | 'households'
  | 'resources'
  | 'commitments'
  | 'needs'
  | 'cases'
  | 'threats'
  | 'disaster'
  | 'property'
  | 'assets'
  | 'reports'
  | 'admin'
  | 'messages';

export type User = {
  id: string;
  displayName: string;
  role: Role;
  householdId?: string;
};

export type AuditLogEntry = {
  id: string;
  actorUserId: string;
  action: string;
  entityType: string;
  entityId: string;
  sensitivity: Sensitivity;
  occurredAt: string;
};
