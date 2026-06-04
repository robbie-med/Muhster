import type { ComponentType } from 'react';
import { AssetsPage } from '../pages/AssetsPage';
import { CareCasesPage } from '../pages/CareCasesPage';
import { CommitmentsPage } from '../pages/CommitmentsPage';
import { DisasterPage } from '../pages/DisasterPage';
import { FamilyAppPage } from '../pages/FamilyAppPage';
import { FieldAppsPage } from '../pages/FieldAppsPage';
import { HouseholdsPage } from '../pages/HouseholdsPage';
import { OperationsBoardPage } from '../pages/OperationsBoardPage';
import { PropertyPage } from '../pages/PropertyPage';
import { ReportsPage } from '../pages/ReportsPage';
import { ResourceMusterPage } from '../pages/ResourceMusterPage';
import { ThreatsPage } from '../pages/ThreatsPage';
import { AdminPage } from '../pages/AdminPage';

export type RouteKey =
  | 'operations'
  | 'households'
  | 'cases'
  | 'resources'
  | 'commitments'
  | 'threats'
  | 'disaster'
  | 'property'
  | 'assets'
  | 'reports'
  | 'family'
  | 'field'
  | 'admin';

export type AppRoute = {
  key: RouteKey;
  label: string;
  description: string;
  component: ComponentType;
};

export const routes: AppRoute[] = [
  { key: 'operations', label: 'Operations Board', description: 'Current operational state.', component: OperationsBoardPage },
  { key: 'households', label: 'Households', description: 'Roster, zones, readiness, assigned deacons.', component: HouseholdsPage },
  { key: 'cases', label: 'Care Cases', description: 'Needs, operations, interventions, follow-up.', component: CareCasesPage },
  { key: 'resources', label: 'Resource Muster', description: 'Available resources and verified capacities.', component: ResourceMusterPage },
  { key: 'commitments', label: 'Commitments', description: 'Concrete household responsibilities.', component: CommitmentsPage },
  { key: 'threats', label: 'Threats', description: 'Threat registry and mitigation.', component: ThreatsPage },
  { key: 'disaster', label: 'Disaster', description: 'Preparedness and activated disaster mode.', component: DisasterPage },
  { key: 'property', label: 'Property', description: 'Work orders and upkeep.', component: PropertyPage },
  { key: 'assets', label: 'Assets', description: 'Equipment and inventory.', component: AssetsPage },
  { key: 'reports', label: 'Reports', description: 'Weekly muster and elder reports.', component: ReportsPage },
  { key: 'family', label: 'Family App', description: 'Household check-ins and needs.', component: FamilyAppPage },
  { key: 'field', label: 'Field Apps', description: 'Narrow apps for assigned field work.', component: FieldAppsPage },
  { key: 'admin', label: 'Admin', description: 'Roles, permissions, audit, backup.', component: AdminPage }
];
