import type { MusterState } from '../types/domain';

const storageKey = import.meta.env.VITE_LOCAL_STORAGE_KEY ?? 'muster.local.v1';

export function loadState(): MusterState | null {
  const raw = window.localStorage.getItem(storageKey);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as MusterState;
  } catch {
    return null;
  }
}

export function saveState(state: MusterState): void {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
}

export function clearState(): void {
  window.localStorage.removeItem(storageKey);
}
