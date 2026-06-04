import { MessageSquare, Siren, ClipboardList, Home } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { useRepository } from '../data/repository';

export function FamilyAppPage() {
  const { state } = useRepository();
  const household = state.households[0];
  return (
    <div className="page-stack">
      <SectionHeader title="MUSTER Household" description="Lightweight family app surface for check-ins, needs, resources, commitments, and encrypted communication." />
      <div className="mobile-preview" aria-label="Family app preview">
        <div className="mobile-card">
          <h3><Home size={18} /> {household.name}</h3>
          <p>Assigned deacon channel active. Messages are designed for end-to-end encryption.</p>
          <div className="mobile-action-grid">
            <button><ClipboardList size={18} /> Check in</button>
            <button><Siren size={18} /> Report need</button>
            <button><MessageSquare size={18} /> Message deacon</button>
            <button>Update resources</button>
            <button>View commitments</button>
            <button>Disaster status</button>
          </div>
        </div>
      </div>
    </div>
  );
}
