import { DataTable } from '../components/DataTable';
import { SectionHeader } from '../components/SectionHeader';
import { StatusChip } from '../components/StatusChip';
import { useRepository } from '../data/repository';
import { householdName } from '../domain/selectors';
import { formatDate } from '../lib/dates';

export function CommitmentsPage() {
  const { state } = useRepository();
  return (
    <div className="page-stack">
      <SectionHeader title="Commitment ledger" description="Concrete responsibilities families have accepted and deacons must track." />
      <DataTable
        caption="Commitments"
        rows={state.commitments}
        keyForRow={(row) => row.id}
        columns={[
          { header: 'Household', render: (row) => householdName(state, row.householdId) },
          { header: 'Commitment', render: (row) => row.type },
          { header: 'Frequency', render: (row) => row.frequency },
          { header: 'Responsible', render: (row) => row.responsibleAdult },
          { header: 'Next due', render: (row) => formatDate(row.nextDueAt) },
          { header: 'Status', render: (row) => <StatusChip tone={row.status === 'good_standing' || row.status === 'active' ? 'green' : 'gold'}>{row.status}</StatusChip> },
          { header: 'Missed', render: (row) => row.missedCount }
        ]}
      />
    </div>
  );
}
