type Props = {
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function SectionHeader({ title, description, action }: Props) {
  return (
    <div className="section-header">
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
