interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="border border-[var(--border-color)] rounded-lg p-6 mb-6">
      <h3 className="heading-sm mb-6 pb-4 border-b border-[var(--border-color)]">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 gap-6">{children}</div>
    </div>
  );
}
