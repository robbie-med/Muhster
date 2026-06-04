import { createContext, useContext } from 'react';
import type { MusterState } from '../types/domain';

export type LocalRepository = {
  state: MusterState;
  replaceState: (state: MusterState) => void;
  reset: () => void;
};

export const RepositoryContext = createContext<LocalRepository | null>(null);

export function useRepository(): LocalRepository {
  const value = useContext(RepositoryContext);
  if (!value) throw new Error('RepositoryContext missing');
  return value;
}
