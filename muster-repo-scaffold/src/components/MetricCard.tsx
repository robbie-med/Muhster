type Props = {
  label: string;
  value: string | number;
  tone?: 'default' | 'ok' | 'warning' | 'danger';
};

export function MetricCard({ label, value, tone = 'default' }: Props) {
  return (
    <section className={`metric-card metric-${tone}`} aria-label={label}>
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
    </section>
  );
}
