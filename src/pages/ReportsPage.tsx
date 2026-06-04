import { SectionHeader } from '../components/SectionHeader';
import { useRepository } from '../data/repository';
import { buildWeeklyMusterBrief } from '../domain/reports';

export function ReportsPage() {
  const { state } = useRepository();
  const brief = buildWeeklyMusterBrief(state);
  return (
    <div className="page-stack">
      <SectionHeader title="Reports" description="Plain-text and export-ready operational briefs." />
      <pre className="report-box">{brief}</pre>
    </div>
  );
}
