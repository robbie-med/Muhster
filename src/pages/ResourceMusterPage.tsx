import { DataTable } from '../components/DataTable';
import { SectionHeader } from '../components/SectionHeader';
import { StatusChip } from '../components/StatusChip';
import { useRepository } from '../data/repository';
import { householdName } from '../domain/selectors';

export function ResourceMusterPage() {
  const { state } = useRepository();
  return (
    <div className="page-stack">
      <SectionHeader title="Resource muster" description="Verified practical capacity available in the body." />
      <DataTable
        caption="Resources"
        rows={state.resources}
        keyForRow={(row) => row.id}
        columns={[
          { header: 'Category', render: (row) => row.category },
          { header: 'Owner household', render: (row) => householdName(state, row.householdId) },
          { header: 'Capacity', render: (row) => row.capacity },
          { header: 'Notice', render: (row) => `${row.noticeRequiredHours}h` },
          { header: 'Status', render: (row) => <StatusChip tone={row.status === 'available' ? 'green' : 'gold'}>{row.status}</StatusChip> },
          { header: 'Reliability', render: (row) => `${row.reliability}/5` }
        ]}
      />
    </div>
  );
}
