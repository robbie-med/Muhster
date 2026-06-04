import type { MusterState } from '../types/domain';
import { riskScore } from '../lib/risk';

export function getOperationsMetrics(state: MusterState) {
  return {
    urgentNeeds: state.needs.filter((need) => ['urgent', 'critical'].includes(need.urgency) && !['closed', 'resolved'].includes(need.status)).length,
    blockedCases: state.careCases.filter((careCase) => careCase.status === 'blocked' || careCase.blockers.length > 0).length,
    overdueFollowUps: state.needs.filter((need) => need.followUpAt && new Date(need.followUpAt) < new Date() && !['closed', 'resolved'].includes(need.status)).length,
    uncommittedHouseholds: state.households.filter((household) => !household.commitmentProfileComplete).length,
    highThreats: state.threats.filter((threat) => riskScore(threat.likelihood, threat.impact) >= 15 && !['resolved', 'archived'].includes(threat.status)).length,
    disasterUnknown: state.disasterProfiles.filter((profile) => profile.currentStatus === 'unknown').length,
    openWorkOrders: state.workOrders.filter((order) => !['complete', 'deferred'].includes(order.status)).length
  };
}

export function householdName(state: MusterState, householdId: string): string {
  return state.households.find((household) => household.id === householdId)?.name ?? 'Unknown household';
}
