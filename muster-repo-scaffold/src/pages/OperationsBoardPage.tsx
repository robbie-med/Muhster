import { DataTable } from '../components/DataTable';
import { MetricCard } from '../components/MetricCard';
import { SectionHeader } from '../components/SectionHeader';
import { StatusChip } from '../components/StatusChip';
import { useRepository } from '../data/repository';
import { getOperationsMetrics, householdName } from '../domain/selectors';

export function OperationsBoardPage() {
  const { state } = useRepository();
  const metrics = getOperationsMetrics(state);
  const activeNeeds = state.needs.filter((need) => !['closed', 'resolved'].includes(need.status));

  return (
    <div className="page-stack">
      <div className="metric-grid">
        <MetricCard label="Urgent Needs" value={metrics.urgentNeeds} tone="danger" />
        <MetricCard label="Blocked Cases" value={metrics.blockedCases} tone="warning" />
        <MetricCard label="Overdue Follow-up" value={metrics.overdueFollowUps} tone="danger" />
        <MetricCard label="Uncommitted Households" value={metrics.uncommittedHouseholds} tone="warning" />
        <MetricCard label="High Threats" value={metrics.highThreats} tone="danger" />
        <MetricCard label="Open Work Orders" value={metrics.openWorkOrders} />
      </div>
      <SectionHeader title="Immediate operational work" description="Needs, blockers, and follow-up requiring deacon action." />
      <DataTable
        caption="Open needs"
        rows={activeNeeds}
        keyForRow={(row) => row.id}
        columns={[
          { header: 'Need', render: (row) => row.title },
          { header: 'Household', render: (row) => householdName(state, row.householdId) },
          { header: 'Urgency', render: (row) => <StatusChip tone={row.urgency === 'urgent' || row.urgency === 'critical' ? 'red' : 'gold'}>{row.urgency}</StatusChip> },
          { header: 'Status', render: (row) => <StatusChip tone="blue">{row.status}</StatusChip> },
          { header: 'Required resources', render: (row) => row.requiredResources.join(', ') }
        ]}
      />
    </div>
  );
}
