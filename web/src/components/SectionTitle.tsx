type SectionTitleProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function SectionTitle({ eyebrow, title, body }: SectionTitleProps) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
