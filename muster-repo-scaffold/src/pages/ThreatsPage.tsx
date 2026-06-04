import { DataTable } from '../components/DataTable';
import { SectionHeader } from '../components/SectionHeader';
import { StatusChip } from '../components/StatusChip';
import { useRepository } from '../data/repository';
import { riskLevel, riskScore } from '../lib/risk';

export function ThreatsPage() {
  const { state } = useRepository();
  return (
    <div className="page-stack">
      <SectionHeader title="Threat registry" description="Security, environmental, operational, legal, community, and continuity threats." />
      <DataTable
        caption="Threats"
        rows={state.threats}
        keyForRow={(row) => row.id}
        columns={[
          { header: 'Threat', render: (row) => row.title },
          { header: 'Category', render: (row) => row.category },
          { header: 'Risk', render: (row) => `${riskScore(row.likelihood, row.impact)} ${riskLevel(riskScore(row.likelihood, row.impact))}` },
          { header: 'Status', render: (row) => <StatusChip tone={riskScore(row.likelihood, row.impact) >= 15 ? 'red' : 'gold'}>{row.status}</StatusChip> },
          { header: 'Mitigation', render: (row) => row.mitigationPlan }
        ]}
      />
    </div>
  );
}
