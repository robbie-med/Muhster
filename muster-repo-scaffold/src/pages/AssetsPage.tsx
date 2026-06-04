import { DataTable } from '../components/DataTable';
import { SectionHeader } from '../components/SectionHeader';
import { StatusChip } from '../components/StatusChip';
import { useRepository } from '../data/repository';

export function AssetsPage() {
  const { state } = useRepository();
  return (
    <div className="page-stack">
      <SectionHeader title="Asset inventory" description="Equipment, supplies, property items, and loanable assets." />
      <DataTable
        caption="Assets"
        rows={state.assets}
        keyForRow={(row) => row.id}
        columns={[
          { header: 'Asset', render: (row) => row.name },
          { header: 'Category', render: (row) => row.category },
          { header: 'Location', render: (row) => row.location },
          { header: 'Condition', render: (row) => <StatusChip tone={row.condition === 'good' || row.condition === 'excellent' ? 'green' : 'gold'}>{row.condition}</StatusChip> },
          { header: 'Loanable', render: (row) => row.loanable ? 'Yes' : 'No' },
          { header: 'Notes', render: (row) => row.notes ?? '' }
        ]}
      />
    </div>
  );
}
