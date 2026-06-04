import { DataTable } from '../components/DataTable';
import { SectionHeader } from '../components/SectionHeader';
import { StatusChip } from '../components/StatusChip';
import { useRepository } from '../data/repository';
import { formatDate } from '../lib/dates';

export function PropertyPage() {
  const { state } = useRepository();
  return (
    <div className="page-stack">
      <SectionHeader title="Property upkeep" description="Work orders and maintenance affecting church readiness." />
      <DataTable
        caption="Work orders"
        rows={state.workOrders}
        keyForRow={(row) => row.id}
        columns={[
          { header: 'Location', render: (row) => row.location },
          { header: 'Issue', render: (row) => row.issue },
          { header: 'Priority', render: (row) => <StatusChip tone={row.priority === 'urgent' || row.priority === 'high' ? 'red' : 'blue'}>{row.priority}</StatusChip> },
          { header: 'Skill', render: (row) => row.requiredSkill },
          { header: 'Due', render: (row) => formatDate(row.dueDate) },
          { header: 'Status', render: (row) => <StatusChip tone={row.status === 'blocked' ? 'red' : 'gold'}>{row.status}</StatusChip> }
        ]}
      />
    </div>
  );
}
