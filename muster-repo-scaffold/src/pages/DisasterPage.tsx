import { DataTable } from '../components/DataTable';
import { SectionHeader } from '../components/SectionHeader';
import { StatusChip } from '../components/StatusChip';
import { useRepository } from '../data/repository';
import { householdName } from '../domain/selectors';

export function DisasterPage() {
  const { state } = useRepository();
  return (
    <div className="page-stack">
      <SectionHeader title="Disaster readiness" description="Household status, transport, shelter, generator, medical electricity, and physical-check needs." />
      <DataTable
        caption="Disaster profiles"
        rows={state.disasterProfiles}
        keyForRow={(row) => row.id}
        columns={[
          { header: 'Household', render: (row) => householdName(state, row.householdId) },
          { header: 'Status', render: (row) => <StatusChip tone={row.currentStatus === 'safe' ? 'green' : row.currentStatus === 'unknown' ? 'gold' : 'red'}>{row.currentStatus}</StatusChip> },
          { header: 'Transport need', render: (row) => row.needsTransportation ? 'Yes' : 'No' },
          { header: 'Power support', render: (row) => row.needsPowerSupport ? 'Yes' : 'No' },
          { header: 'Physical check', render: (row) => row.needsPhysicalCheckIfPhonesFail ? 'Required if unreachable' : 'No' },
          { header: 'Preferred contact', render: (row) => row.preferredCheckInMethod.replaceAll('_', ' ') }
        ]}
      />
    </div>
  );
}
