import type { MusterState } from '../types/domain';
import { getOperationsMetrics } from './selectors';

export function buildWeeklyMusterBrief(state: MusterState): string {
  const metrics = getOperationsMetrics(state);
  const lines = [
    'MUSTER Weekly Deacon Brief',
    '',
    `Urgent needs: ${metrics.urgentNeeds}`,
    `Blocked cases: ${metrics.blockedCases}`,
    `Overdue follow-ups: ${metrics.overdueFollowUps}`,
    `Uncommitted households: ${metrics.uncommittedHouseholds}`,
    `High threats: ${metrics.highThreats}`,
    `Unknown disaster statuses: ${metrics.disasterUnknown}`,
    `Open work orders: ${metrics.openWorkOrders}`,
    '',
    'Immediate action:',
    '1. Assign or resolve blocked cases.',
    '2. Contact households with overdue follow-up.',
    '3. Review high-risk threats and mitigation owners.',
    '4. Confirm uncommitted households have assigned deacon follow-up.'
  ];
  return lines.join('\n');
}
