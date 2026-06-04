import { useMemo, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import type { AppRoute, RouteKey } from './routes';
import { RepositoryContext, type LocalRepository } from '../data/repository';
import { classNames } from '../lib/classNames';

type Props = {
  routes: AppRoute[];
  repository: LocalRepository;
};

export function AppShell({ routes, repository }: Props) {
  const [activeKey, setActiveKey] = useState<RouteKey>('operations');
  const activeRoute = useMemo(() => routes.find((route) => route.key === activeKey) ?? routes[0], [activeKey, routes]);
  const ActiveComponent = activeRoute.component;

  return (
    <RepositoryContext.Provider value={repository}>
      <div className="app-shell">
        <aside className="sidebar" aria-label="MUSTER main navigation">
          <div className="brand-block">
            <div className="brand-mark" aria-hidden="true"><ShieldCheck size={26} /></div>
            <div>
              <div className="brand-title">MUSTER</div>
              <div className="brand-subtitle">Local church operations</div>
            </div>
          </div>
          <nav className="nav-list">
            {routes.map((route) => (
              <button
                key={route.key}
                className={classNames('nav-item', route.key === activeKey && 'nav-item-active')}
                onClick={() => setActiveKey(route.key)}
                aria-current={route.key === activeKey ? 'page' : undefined}
              >
                <span>{route.label}</span>
              </button>
            ))}
          </nav>
        </aside>
        <div className="workspace">
          <header className="topbar">
            <div>
              <h1>{activeRoute.label}</h1>
              <p>{activeRoute.description}</p>
            </div>
            <div className="topbar-status" aria-label="System status">
              <span className="status-dot status-ok" /> Local demo mode
            </div>
          </header>
          <main className="main-panel">
            <ActiveComponent />
          </main>
        </div>
      </div>
    </RepositoryContext.Provider>
  );
}
