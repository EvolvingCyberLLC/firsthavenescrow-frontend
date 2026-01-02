interface BulletListProps {
  items: string[];
  icon?: "check" | "arrow" | "bullet";
}

export default function BulletList({ items, icon = "check" }: BulletListProps) {
  const icons = {
    check: (
      <svg
        className="w-5 h-5 text-[var(--gold)] flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    arrow: (
      <svg
        className="w-5 h-5 text-[var(--gold)] flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    ),
    bullet: (
      <span
        className="w-2 h-2 bg-[var(--gold)] rounded-full flex-shrink-0 mt-2"
        aria-hidden="true"
      />
    ),
  };

  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          {icons[icon]}
          <span className="text-[var(--text-muted)]">{item}</span>
        </li>
      ))}
    </ul>
  );
}
