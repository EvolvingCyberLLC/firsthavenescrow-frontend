interface NoticeBoxProps {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "warning" | "info";
}

export default function NoticeBox({
  title,
  children,
  variant = "default",
}: NoticeBoxProps) {
  const variantStyles = {
    default: "bg-[var(--light-gray)] border-[var(--border-color)]",
    warning: "bg-amber-50 border-amber-200",
    info: "bg-blue-50 border-blue-200",
  };

  return (
    <div
      className={`p-6 rounded-lg border ${variantStyles[variant]}`}
      role="note"
    >
      <h3 className="font-semibold text-[var(--navy)] mb-3">{title}</h3>
      <div className="text-[var(--text-muted)] text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
