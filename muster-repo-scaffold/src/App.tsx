import { AppShell } from './app/AppShell';
import { useLocalRepository } from './data/useLocalRepository';
import { routes } from './app/routes';

export function App() {
  const repository = useLocalRepository();
  return <AppShell routes={routes} repository={repository} />;
}
