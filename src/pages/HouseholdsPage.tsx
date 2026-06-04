import { DataTable } from '../components/DataTable';
import { SectionHeader } from '../components/SectionHeader';
import { StatusChip } from '../components/StatusChip';
import { useRepository } from '../data/repository';

export function HouseholdsPage() {
  const { state } = useRepository();
  return (
    <div className="page-stack">
      <SectionHeader title="Household roster" description="Canonical list of member households, zones, assigned deacons, readiness, and care status." />
      <DataTable
        caption="Households"
        rows={state.households}
        keyForRow={(row) => row.id}
        columns={[
          { header: 'Household', render: (row) => row.name },
          { header: 'Zone', render: (row) => row.zone },
          { header: 'Adults', render: (row) => row.adults.join(', ') },
          { header: 'Care status', render: (row) => <StatusChip tone={row.careStatus === 'active_care' || row.careStatus === 'crisis' ? 'red' : 'green'}>{row.careStatus}</StatusChip> },
          { header: 'Readiness', render: (row) => <StatusChip tone={row.readinessStatus === 'complete' ? 'green' : 'gold'}>{row.readinessStatus}</StatusChip> },
          { header: 'Flags', render: (row) => row.flags.join(', ') || 'None' }
        ]}
      />
    </div>
  );
}
