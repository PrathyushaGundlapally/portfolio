export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';

  return (
    <div className={alignment}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title mt-5">{title}</h2>
      <p className="copy-muted mt-4">{description}</p>
    </div>
  );
}
