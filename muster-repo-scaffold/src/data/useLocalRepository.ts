import { useMemo, useState } from 'react';
import type { LocalRepository } from './repository';
import { seedState } from './seed';
import { clearState, loadState, saveState } from '../lib/storage';
import type { MusterState } from '../types/domain';

export function useLocalRepository(): LocalRepository {
  const [state, setState] = useState<MusterState>(() => loadState() ?? seedState);

  return useMemo(
    () => ({
      state,
      replaceState(next: MusterState) {
        saveState(next);
        setState(next);
      },
      reset() {
        clearState();
        saveState(seedState);
        setState(seedState);
      }
    }),
    [state]
  );
}
