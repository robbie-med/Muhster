import type { ModuleKey, PermissionAction, Role, Sensitivity } from '../types/security';

const roleRank: Record<Role, number> = {
  household_user: 1,
  auditor: 2,
  deacon: 3,
  benevolence_officer: 4,
  property_lead: 4,
  security_lead: 4,
  elder: 5,
  lead_deacon: 6,
  admin: 7
};

export function canAccessSensitivity(role: Role, sensitivity: Sensitivity): boolean {
  if (role === 'admin') return true;
  if (sensitivity === 'general') return true;
  if (sensitivity === 'deacon_only') return roleRank[role] >= roleRank.deacon;
  if (sensitivity === 'lead_deacon_only') return roleRank[role] >= roleRank.lead_deacon;
  if (sensitivity === 'elder_only') return role === 'elder' || role === 'lead_deacon';
  if (sensitivity === 'benevolence') return role === 'benevolence_officer' || role === 'elder' || role === 'lead_deacon';
  if (sensitivity === 'security_sensitive') return role === 'security_lead' || role === 'elder' || role === 'lead_deacon';
  if (sensitivity === 'property_security') return role === 'property_lead' || role === 'security_lead' || role === 'lead_deacon';
  if (sensitivity === 'disaster') return roleRank[role] >= roleRank.deacon;
  if (['medical_sensitive', 'family_sensitive', 'child_safety', 'legal'].includes(sensitivity)) {
    return role === 'elder' || role === 'lead_deacon';
  }
  return false;
}

export function canUseModule(role: Role, module: ModuleKey, action: PermissionAction): boolean {
  if (role === 'admin') return true;
  if (role === 'household_user') return ['messages', 'needs', 'resources'].includes(module) && ['create', 'read', 'update'].includes(action);
  if (role === 'auditor') return action === 'read' && module !== 'admin';
  if (role === 'property_lead') return ['property', 'assets', 'reports'].includes(module);
  if (role === 'security_lead') return ['threats', 'disaster', 'reports', 'messages'].includes(module);
  if (role === 'benevolence_officer') return ['needs', 'cases', 'reports', 'messages'].includes(module);
  if (role === 'elder') return action !== 'delete' && module !== 'admin';
  if (role === 'lead_deacon') return module !== 'admin';
  if (role === 'deacon') return !['admin'].includes(module) && action !== 'delete' && action !== 'export';
  return false;
}
