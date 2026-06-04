import { SectionHeader } from '../components/SectionHeader';
import { useRepository } from '../data/repository';

export function AdminPage() {
  const { reset } = useRepository();
  return (
    <div className="page-stack">
      <SectionHeader title="Admin" description="Local install, roles, permissions, audit, backup, and restore controls." />
      <section className="plain-card">
        <h3>Local-first demo repository</h3>
        <p>This scaffold stores seed and working data in browser localStorage. Future milestones replace this with a locally hosted API and PostgreSQL.</p>
        <button className="primary-button" onClick={reset}>Reset seed data</button>
      </section>
      <section className="plain-card">
        <h3>Security boundary</h3>
        <p>Production must enforce role-based access, record-level permissions, encrypted backups, audit logging, device approval, and E2EE household messaging.</p>
      </section>
    </div>
  );
}
