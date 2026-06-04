import { SectionHeader } from '../components/SectionHeader';

const fieldApps = [
  ['MUSTER Visit', 'Household visits, shut-in checks, widow checks, hospital visits.'],
  ['MUSTER Disaster', 'Emergency check-ins, physical checks, transport, shelter, power/water/food status.'],
  ['MUSTER Work Crew', 'Property upkeep, moving help, storm cleanup, home repair.'],
  ['MUSTER Meals', 'Meal delivery, funeral meals, postpartum support, illness recovery.'],
  ['MUSTER Security', 'Incident intake, suspicious activity, event disruption, access issues.'],
  ['MUSTER Inventory', 'Tools, keys, radios, generators, medical kits, pantry stock.']
];

export function FieldAppsPage() {
  return (
    <div className="page-stack">
      <SectionHeader title="Field apps" description="Narrow companion tools. They expose only assigned work, not the full church database." />
      <div className="card-grid">
        {fieldApps.map(([title, body]) => <section className="plain-card" key={title}><h3>{title}</h3><p>{body}</p></section>)}
      </div>
    </div>
  );
}
