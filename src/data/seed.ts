import type { MusterState } from '../types/domain';

export const seedState: MusterState = {
  households: [
    {
      id: 'hh-johnson', name: 'Johnson Household', adults: ['Mark Johnson', 'Lisa Johnson'], children: ['Anna', 'Caleb'], address: '1287 Ridgeview Dr', phones: ['555-0101'], emails: ['johnson@example.local'], zone: 'North Ridge', assignedDeaconId: 'user-thompson', assignedElderId: 'user-elder-wright', membershipStatus: 'member', emergencyContact: 'Mary Johnson 555-0102', flags: ['new_baby', 'transport_available'], languageNeeds: [], lastContactedAt: '2026-06-01', lastVisitedAt: '2026-05-19', lastServedAt: '2026-05-02', lastReceivedCareAt: '2026-05-27', resourceProfileComplete: true, commitmentProfileComplete: true, disasterProfileComplete: true, readinessStatus: 'complete', careStatus: 'watch', securitySensitivity: 'general'
    },
    {
      id: 'hh-williams', name: 'Williams Family', adults: ['Daniel Williams', 'Grace Williams'], children: ['Noah', 'Ruth', 'Samuel'], address: '410 Cedar Lane', phones: ['555-0110'], emails: ['williams@example.local'], zone: 'East Valley', assignedDeaconId: 'user-carter', membershipStatus: 'member', emergencyContact: 'Ellen Williams 555-0112', flags: ['postpartum', 'needs_meals'], languageNeeds: [], lastContactedAt: '2026-06-03', lastReceivedCareAt: '2026-06-03', resourceProfileComplete: false, commitmentProfileComplete: false, disasterProfileComplete: true, readinessStatus: 'missing_commitments', careStatus: 'active_care', securitySensitivity: 'deacon_only'
    },
    {
      id: 'hh-harris', name: 'Harris Household', adults: ['Robert Harris'], children: [], address: '83 Maple St', phones: ['555-0120'], emails: ['harris@example.local'], zone: 'South Point', assignedDeaconId: 'user-thompson', membershipStatus: 'member', emergencyContact: 'Tom Harris 555-0122', flags: ['widower', 'mobility_limitation'], languageNeeds: [], lastContactedAt: '2026-05-01', lastVisitedAt: '2026-04-18', resourceProfileComplete: true, commitmentProfileComplete: false, disasterProfileComplete: false, readinessStatus: 'needs_review', careStatus: 'needs_contact', securitySensitivity: 'medical_sensitive'
    }
  ],
  resources: [
    { id: 'res-truck-davis', householdId: 'hh-johnson', responsibleAdult: 'Mark Johnson', category: 'Truck / trailer', capacity: 'One pickup and 12 ft trailer', condition: 'Good', status: 'available', noticeRequiredHours: 72, verifiedByUserId: 'user-thompson', verifiedAt: '2026-05-10', reliability: 5, notes: 'Available outside work hours.' },
    { id: 'res-meals-johnson', householdId: 'hh-johnson', responsibleAdult: 'Lisa Johnson', category: 'Meals', capacity: '2 meals per month', condition: 'Ready', status: 'available', noticeRequiredHours: 24, verifiedByUserId: 'user-thompson', verifiedAt: '2026-05-12', reliability: 4 },
    { id: 'res-housing-williams', householdId: 'hh-williams', responsibleAdult: 'Daniel Williams', category: 'Temporary housing', capacity: 'Guest room when not postpartum', condition: 'Paused', status: 'limited', noticeRequiredHours: 168, reliability: 3, restrictions: 'Paused during postpartum period.' }
  ],
  commitments: [
    { id: 'com-johnson-meals', householdId: 'hh-johnson', responsibleAdult: 'Lisa Johnson', type: 'Meals', frequency: '2 per month', capacity: 'Two family meals', startDate: '2026-01-01', reviewDate: '2026-12-01', status: 'good_standing', reliability: 4, lastFulfilledAt: '2026-05-25', nextDueAt: '2026-06-15', missedCount: 0, deaconFollowUp: false },
    { id: 'com-johnson-truck', householdId: 'hh-johnson', responsibleAdult: 'Mark Johnson', type: 'Truck access', frequency: 'As needed', capacity: '72h notice', startDate: '2026-01-01', reviewDate: '2026-12-01', status: 'active', reliability: 5, lastFulfilledAt: '2026-05-02', missedCount: 0, deaconFollowUp: false },
    { id: 'com-harris-widow', householdId: 'hh-harris', responsibleAdult: 'Robert Harris', type: 'Prayer support', frequency: 'Weekly phone calls', capacity: 'Two calls', startDate: '2026-01-01', reviewDate: '2026-07-01', status: 'needs_review', reliability: 3, missedCount: 1, deaconFollowUp: true }
  ],
  needs: [
    { id: 'need-williams-postpartum', householdId: 'hh-williams', reportedBy: 'Grace Williams', category: 'Postpartum', title: 'Postpartum support for Williams family', description: 'Meals, childcare, and follow-up during first weeks postpartum.', urgency: 'urgent', sensitivity: 'deacon_only', status: 'in_progress', assignedDeaconId: 'user-carter', requiredResources: ['Meals', 'Childcare', 'Transport'], followUpAt: '2026-06-05T10:00:00Z', elderInvolvementRequired: false, benevolenceRequested: false, createdAt: '2026-06-03T16:00:00Z' },
    { id: 'need-harris-contact', householdId: 'hh-harris', reportedBy: 'system', category: 'Widow care', title: 'Widower overdue contact', description: 'No contact in more than 30 days.', urgency: 'soon', sensitivity: 'medical_sensitive', status: 'verification_pending', assignedDeaconId: 'user-thompson', requiredResources: ['Visit'], followUpAt: '2026-06-02T18:00:00Z', elderInvolvementRequired: false, benevolenceRequested: false, createdAt: '2026-06-01T12:00:00Z' }
  ],
  careCases: [
    { id: 'case-williams-postpartum', needId: 'need-williams-postpartum', householdId: 'hh-williams', title: 'Williams Family Postpartum Operation', leadDeaconId: 'user-carter', supportingDeaconIds: ['user-thompson'], assignedHouseholdIds: ['hh-johnson'], urgency: 'urgent', sensitivity: 'deacon_only', status: 'in_progress', objective: 'Stabilize household for first 14 days postpartum with meals, childcare, transport, and follow-up.', requiredSupport: ['Meals x8', 'Childcare x4 blocks', 'Transport x2', 'Follow-up at 48h / 7d / 14d'], resolutionCriteria: ['Meals completed', 'Mother recovering', 'No unresolved transport need', 'Family reconnected to Lord’s Day worship'], blockers: [], openedAt: '2026-06-03T16:30:00Z', targetCloseAt: '2026-06-20' }
  ],
  interventions: [
    { id: 'int-williams-1', caseId: 'case-williams-postpartum', performedByUserId: 'user-carter', actionType: 'Phone call', description: 'Verified need and confirmed meal schedule.', outcome: 'Operation plan opened.', nextStep: 'Assign remaining meals.', followUpAt: '2026-06-05T10:00:00Z', visibility: 'deacon_only', createdAt: '2026-06-03T17:00:00Z' }
  ],
  threats: [
    { id: 'thr-storm-season', title: 'Severe storm season readiness gap', category: 'Environmental', description: 'Several vulnerable households have incomplete disaster profiles.', source: 'Deacon review', dateIdentified: '2026-06-01', location: 'All zones', affectedHouseholdIds: ['hh-harris'], likelihood: 4, impact: 4, ownerUserId: 'user-carter', status: 'monitoring', mitigationPlan: 'Complete disaster readiness profiles and assign physical check routes.', nextReviewDate: '2026-06-10', escalationRequired: false, elderVisible: true, lawEnforcementContacted: false, confidentiality: 'disaster' }
  ],
  disasterProfiles: [
    { id: 'dp-johnson', householdId: 'hh-johnson', canReceiveSms: true, canReceivePhone: true, needsPhysicalCheckIfPhonesFail: false, hasTransportation: true, needsTransportation: false, hasGenerator: false, needsPowerSupport: false, hasMedicalElectricityNeed: false, hasFoodReserve: true, canShelterOthers: false, needsShelter: false, canProvideLabor: true, canProvideChainsaw: false, preferredCheckInMethod: 'app', assignedDisasterDeaconId: 'user-thompson', currentStatus: 'safe' },
    { id: 'dp-harris', householdId: 'hh-harris', canReceiveSms: false, canReceivePhone: true, needsPhysicalCheckIfPhonesFail: true, hasTransportation: false, needsTransportation: true, hasGenerator: false, needsPowerSupport: true, hasMedicalElectricityNeed: true, hasFoodReserve: false, canShelterOthers: false, needsShelter: true, canProvideLabor: false, canProvideChainsaw: false, preferredCheckInMethod: 'physical_check', assignedDisasterDeaconId: 'user-thompson', currentStatus: 'unknown' }
  ],
  workOrders: [
    { id: 'wo-aed-check', location: 'Main foyer', issue: 'AED battery and pads due for review', priority: 'high', reportedByUserId: 'user-admin', assignedToUserId: 'user-property', requiredSkill: 'Safety equipment', requiredMaterials: ['AED pads', 'Battery if expired'], dueDate: '2026-06-15', status: 'assigned', followUpNeeded: true }
  ],
  assets: [
    { id: 'asset-generator', name: 'Portable generator', category: 'Generator', location: 'Maintenance closet', condition: 'good', replacementValue: 1200, owner: 'Church', responsibleUserId: 'user-property', loanable: true, lastSeenAt: '2026-05-20', notes: 'Test monthly during storm season.' }
  ],
  messageThreads: [
    { id: 'thread-johnson-deacon', householdId: 'hh-johnson', participantUserIds: ['user-household-johnson', 'user-thompson'], title: 'Johnson Household / Deacon', encrypted: true, sensitivity: 'deacon_only', lastMessageAt: '2026-06-03T20:00:00Z' }
  ],
  messages: []
};
