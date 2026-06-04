import { classNames } from '../lib/classNames';

type Props = {
  children: string;
  tone?: 'neutral' | 'green' | 'gold' | 'red' | 'blue';
};

export function StatusChip({ children, tone = 'neutral' }: Props) {
  return <span className={classNames('status-chip', `chip-${tone}`)}>{children.replaceAll('_', ' ')}</span>;
}
