import type { EntityId, ISODate, ISODateTime } from './id';
import type { Sensitivity } from './security';

export type HouseholdStatus = 'stable' | 'watch' | 'needs_contact' | 'active_care' | 'crisis' | 'inactive' | 'moved' | 'under_elder_review';
export type ReadinessStatus = 'complete' | 'partial' | 'missing_resources' | 'missing_commitments' | 'needs_review' | 'exempt_limited';
export type NeedStatus = 'new' | 'verification_pending' | 'verified' | 'assigned' | 'mobilizing' | 'in_progress' | 'blocked' | 'awaiting_follow_up' | 'resolved' | 'closed' | 'escalated';
export type Urgency = 'routine' | 'soon' | 'urgent' | 'critical';
export type ResourceStatus = 'available' | 'limited' | 'unavailable' | 'needs_verification' | 'suspended' | 'retired';
export type CommitmentStatus = 'good_standing' | 'active' | 'at_risk' | 'missed' | 'needs_review' | 'paused' | 'released' | 'exempt';
export type ThreatStatus = 'new' | 'under_review' | 'monitoring' | 'mitigation_planned' | 'mitigation_active' | 'escalated' | 'resolved' | 'archived';
export type DisasterStatus = 'unknown' | 'safe' | 'needs_contact' | 'needs_supplies' | 'needs_transport' | 'needs_medical_help' | 'needs_shelter' | 'evacuated' | 'unavailable' | 'critical';
export type WorkOrderStatus = 'new' | 'reviewed' | 'assigned' | 'waiting_materials' | 'in_progress' | 'blocked' | 'complete' | 'deferred';
export type Priority = 'low' | 'normal' | 'high' | 'urgent';

export type Household = {
  id: EntityId;
  name: string;
  adults: string[];
  children: string[];
  address: string;
  phones: string[];
  emails: string[];
  zone: string;
  assignedDeaconId: EntityId;
  assignedElderId?: EntityId;
  membershipStatus: 'member' | 'regular_attender' | 'inactive' | 'transferred';
  emergencyContact: string;
  flags: string[];
  languageNeeds: string[];
  lastContactedAt?: ISODate;
  lastVisitedAt?: ISODate;
  lastServedAt?: ISODate;
  lastReceivedCareAt?: ISODate;
  resourceProfileComplete: boolean;
  commitmentProfileComplete: boolean;
  disasterProfileComplete: boolean;
  readinessStatus: ReadinessStatus;
  careStatus: HouseholdStatus;
  securitySensitivity: Sensitivity;
  notes?: string;
};

export type Resource = {
  id: EntityId;
  householdId: EntityId;
  responsibleAdult: string;
  category: string;
  capacity: string;
  condition: string;
  status: ResourceStatus;
  noticeRequiredHours: number;
  frequencyLimit?: string;
  verifiedByUserId?: EntityId;
  verifiedAt?: ISODate;
  lastUsedAt?: ISODate;
  reliability: 1 | 2 | 3 | 4 | 5;
  restrictions?: string;
  notes?: string;
};

export type Commitment = {
  id: EntityId;
  householdId: EntityId;
  responsibleAdult: string;
  type: string;
  frequency: string;
  capacity: string;
  startDate: ISODate;
  reviewDate: ISODate;
  status: CommitmentStatus;
  reliability: 1 | 2 | 3 | 4 | 5;
  lastFulfilledAt?: ISODate;
  nextDueAt?: ISODate;
  missedCount: number;
  deaconFollowUp: boolean;
};

export type Need = {
  id: EntityId;
  householdId: EntityId;
  reportedBy: string;
  category: string;
  title: string;
  description: string;
  urgency: Urgency;
  sensitivity: Sensitivity;
  status: NeedStatus;
  assignedDeaconId: EntityId;
  requiredResources: string[];
  followUpAt?: ISODateTime;
  elderInvolvementRequired: boolean;
  benevolenceRequested: boolean;
  createdAt: ISODateTime;
};

export type CareCase = {
  id: EntityId;
  needId: EntityId;
  householdId: EntityId;
  title: string;
  leadDeaconId: EntityId;
  supportingDeaconIds: EntityId[];
  assignedHouseholdIds: EntityId[];
  urgency: Urgency;
  sensitivity: Sensitivity;
  status: NeedStatus;
  objective: string;
  requiredSupport: string[];
  resolutionCriteria: string[];
  blockers: string[];
  openedAt: ISODateTime;
  targetCloseAt?: ISODate;
  closedAt?: ISODateTime;
};

export type Intervention = {
  id: EntityId;
  caseId: EntityId;
  performedByUserId: EntityId;
  actionType: string;
  description: string;
  outcome: string;
  nextStep?: string;
  followUpAt?: ISODateTime;
  visibility: Sensitivity;
  createdAt: ISODateTime;
};

export type Threat = {
  id: EntityId;
  title: string;
  category: string;
  description: string;
  source: string;
  dateIdentified: ISODate;
  location: string;
  affectedHouseholdIds: EntityId[];
  likelihood: 1 | 2 | 3 | 4 | 5;
  impact: 1 | 2 | 3 | 4 | 5;
  ownerUserId: EntityId;
  status: ThreatStatus;
  mitigationPlan: string;
  nextReviewDate: ISODate;
  escalationRequired: boolean;
  elderVisible: boolean;
  lawEnforcementContacted: boolean;
  confidentiality: Sensitivity;
};

export type DisasterProfile = {
  id: EntityId;
  householdId: EntityId;
  canReceiveSms: boolean;
  canReceivePhone: boolean;
  needsPhysicalCheckIfPhonesFail: boolean;
  hasTransportation: boolean;
  needsTransportation: boolean;
  hasGenerator: boolean;
  needsPowerSupport: boolean;
  hasMedicalElectricityNeed: boolean;
  hasFoodReserve: boolean;
  canShelterOthers: boolean;
  needsShelter: boolean;
  canProvideLabor: boolean;
  canProvideChainsaw: boolean;
  preferredCheckInMethod: 'app' | 'sms' | 'phone' | 'physical_check';
  assignedDisasterDeaconId: EntityId;
  currentStatus: DisasterStatus;
};

export type WorkOrder = {
  id: EntityId;
  location: string;
  issue: string;
  priority: Priority;
  reportedByUserId: EntityId;
  assignedToUserId?: EntityId;
  requiredSkill: string;
  requiredMaterials: string[];
  dueDate?: ISODate;
  status: WorkOrderStatus;
  costEstimate?: number;
  actualCost?: number;
  completionNotes?: string;
  followUpNeeded: boolean;
};

export type Asset = {
  id: EntityId;
  name: string;
  category: string;
  location: string;
  serialNumber?: string;
  condition: 'excellent' | 'good' | 'fair' | 'poor' | 'retire';
  replacementValue?: number;
  owner: string;
  responsibleUserId?: EntityId;
  loanable: boolean;
  checkedOutTo?: string;
  lastSeenAt?: ISODate;
  notes?: string;
};

export type MessageThread = {
  id: EntityId;
  householdId: EntityId;
  participantUserIds: EntityId[];
  title: string;
  encrypted: boolean;
  sensitivity: Sensitivity;
  lastMessageAt: ISODateTime;
};

export type Message = {
  id: EntityId;
  threadId: EntityId;
  senderUserId: EntityId;
  ciphertext: string;
  nonce: string;
  createdAt: ISODateTime;
};

export type MusterState = {
  households: Household[];
  resources: Resource[];
  commitments: Commitment[];
  needs: Need[];
  careCases: CareCase[];
  interventions: Intervention[];
  threats: Threat[];
  disasterProfiles: DisasterProfile[];
  workOrders: WorkOrder[];
  assets: Asset[];
  messageThreads: MessageThread[];
  messages: Message[];
};
