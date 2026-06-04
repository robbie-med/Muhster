import { DataTable } from '../components/DataTable';
import { SectionHeader } from '../components/SectionHeader';
import { StatusChip } from '../components/StatusChip';
import { useRepository } from '../data/repository';
import { householdName } from '../domain/selectors';

export function CareCasesPage() {
  const { state } = useRepository();
  return (
    <div className="page-stack">
      <SectionHeader title="Care operations" description="Needs converted into executable care operations with follow-through." />
      <DataTable
        caption="Care cases"
        rows={state.careCases}
        keyForRow={(row) => row.id}
        columns={[
          { header: 'Case', render: (row) => row.title },
          { header: 'Household', render: (row) => householdName(state, row.householdId) },
          { header: 'Objective', render: (row) => row.objective },
          { header: 'Status', render: (row) => <StatusChip tone={row.status === 'blocked' ? 'red' : 'blue'}>{row.status}</StatusChip> },
          { header: 'Support', render: (row) => row.requiredSupport.join('; ') },
          { header: 'Blockers', render: (row) => row.blockers.length ? row.blockers.join(', ') : 'None' }
        ]}
      />
    </div>
  );
}
