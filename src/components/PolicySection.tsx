interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export default function PolicySection({
  title,
  children,
  id,
}: PolicySectionProps) {
  return (
    <section id={id} className="mb-10">
      <h2 className="heading-md mb-4">{title}</h2>
      <div className="text-[var(--text-muted)] space-y-4">{children}</div>
    </section>
  );
}
