-- MUSTER local backend schema draft.
-- The React scaffold currently uses localStorage seed data. This SQL is the target PostgreSQL model for the local server milestone.

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  role TEXT NOT NULL,
  household_id TEXT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE households (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  zone TEXT NOT NULL,
  assigned_deacon_id TEXT NOT NULL REFERENCES users(id),
  assigned_elder_id TEXT NULL REFERENCES users(id),
  membership_status TEXT NOT NULL,
  emergency_contact TEXT NOT NULL,
  readiness_status TEXT NOT NULL,
  care_status TEXT NOT NULL,
  security_sensitivity TEXT NOT NULL DEFAULT 'general',
  notes TEXT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE household_members (
  id TEXT PRIMARY KEY,
  household_id TEXT NOT NULL REFERENCES households(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  relationship TEXT NOT NULL,
  is_adult BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE resources (
  id TEXT PRIMARY KEY,
  household_id TEXT NOT NULL REFERENCES households(id) ON DELETE CASCADE,
  responsible_adult TEXT NOT NULL,
  category TEXT NOT NULL,
  capacity TEXT NOT NULL,
  condition TEXT NOT NULL,
  status TEXT NOT NULL,
  notice_required_hours INTEGER NOT NULL,
  reliability INTEGER NOT NULL CHECK (reliability BETWEEN 1 AND 5),
  verified_by_user_id TEXT NULL REFERENCES users(id),
  verified_at DATE NULL,
  notes TEXT NULL
);

CREATE TABLE commitments (
  id TEXT PRIMARY KEY,
  household_id TEXT NOT NULL REFERENCES households(id) ON DELETE CASCADE,
  responsible_adult TEXT NOT NULL,
  commitment_type TEXT NOT NULL,
  frequency TEXT NOT NULL,
  capacity TEXT NOT NULL,
  start_date DATE NOT NULL,
  review_date DATE NOT NULL,
  status TEXT NOT NULL,
  reliability INTEGER NOT NULL CHECK (reliability BETWEEN 1 AND 5),
  last_fulfilled_at DATE NULL,
  next_due_at DATE NULL,
  missed_count INTEGER NOT NULL DEFAULT 0,
  deacon_follow_up BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE needs (
  id TEXT PRIMARY KEY,
  household_id TEXT NOT NULL REFERENCES households(id),
  reported_by TEXT NOT NULL,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  urgency TEXT NOT NULL,
  sensitivity TEXT NOT NULL,
  status TEXT NOT NULL,
  assigned_deacon_id TEXT NOT NULL REFERENCES users(id),
  follow_up_at TIMESTAMPTZ NULL,
  elder_involvement_required BOOLEAN NOT NULL DEFAULT false,
  benevolence_requested BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE care_cases (
  id TEXT PRIMARY KEY,
  need_id TEXT NOT NULL REFERENCES needs(id),
  household_id TEXT NOT NULL REFERENCES households(id),
  title TEXT NOT NULL,
  lead_deacon_id TEXT NOT NULL REFERENCES users(id),
  urgency TEXT NOT NULL,
  sensitivity TEXT NOT NULL,
  status TEXT NOT NULL,
  objective TEXT NOT NULL,
  opened_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  target_close_at DATE NULL,
  closed_at TIMESTAMPTZ NULL
);

CREATE TABLE interventions (
  id TEXT PRIMARY KEY,
  case_id TEXT NOT NULL REFERENCES care_cases(id) ON DELETE CASCADE,
  performed_by_user_id TEXT NOT NULL REFERENCES users(id),
  action_type TEXT NOT NULL,
  description TEXT NOT NULL,
  outcome TEXT NOT NULL,
  next_step TEXT NULL,
  follow_up_at TIMESTAMPTZ NULL,
  visibility TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE threats (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  source TEXT NOT NULL,
  date_identified DATE NOT NULL,
  location TEXT NOT NULL,
  likelihood INTEGER NOT NULL CHECK (likelihood BETWEEN 1 AND 5),
  impact INTEGER NOT NULL CHECK (impact BETWEEN 1 AND 5),
  owner_user_id TEXT NOT NULL REFERENCES users(id),
  status TEXT NOT NULL,
  mitigation_plan TEXT NOT NULL,
  next_review_date DATE NOT NULL,
  escalation_required BOOLEAN NOT NULL DEFAULT false,
  elder_visible BOOLEAN NOT NULL DEFAULT false,
  law_enforcement_contacted BOOLEAN NOT NULL DEFAULT false,
  confidentiality TEXT NOT NULL
);

CREATE TABLE disaster_profiles (
  id TEXT PRIMARY KEY,
  household_id TEXT NOT NULL REFERENCES households(id) ON DELETE CASCADE,
  current_status TEXT NOT NULL DEFAULT 'unknown',
  preferred_check_in_method TEXT NOT NULL,
  assigned_disaster_deacon_id TEXT NOT NULL REFERENCES users(id),
  needs_physical_check_if_phones_fail BOOLEAN NOT NULL DEFAULT false,
  needs_transportation BOOLEAN NOT NULL DEFAULT false,
  needs_power_support BOOLEAN NOT NULL DEFAULT false,
  has_medical_electricity_need BOOLEAN NOT NULL DEFAULT false,
  needs_shelter BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE work_orders (
  id TEXT PRIMARY KEY,
  location TEXT NOT NULL,
  issue TEXT NOT NULL,
  priority TEXT NOT NULL,
  reported_by_user_id TEXT NOT NULL REFERENCES users(id),
  assigned_to_user_id TEXT NULL REFERENCES users(id),
  required_skill TEXT NOT NULL,
  due_date DATE NULL,
  status TEXT NOT NULL,
  follow_up_needed BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE assets (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  location TEXT NOT NULL,
  condition TEXT NOT NULL,
  replacement_value NUMERIC NULL,
  owner TEXT NOT NULL,
  responsible_user_id TEXT NULL REFERENCES users(id),
  loanable BOOLEAN NOT NULL DEFAULT false,
  checked_out_to TEXT NULL,
  last_seen_at DATE NULL,
  notes TEXT NULL
);

CREATE TABLE audit_logs (
  id TEXT PRIMARY KEY,
  actor_user_id TEXT NOT NULL REFERENCES users(id),
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  sensitivity TEXT NOT NULL,
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
