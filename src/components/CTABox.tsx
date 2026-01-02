import Link from "next/link";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

interface CTABoxProps {
  title: string;
  description?: string;
  buttons: CTAButton[];
  variant?: "default" | "navy" | "light";
}

export default function CTABox({
  title,
  description,
  buttons,
  variant = "default",
}: CTABoxProps) {
  const variantStyles = {
    default: "bg-[var(--light-gray)]",
    navy: "bg-[var(--navy)] text-white",
    light: "bg-white border border-[var(--border-color)]",
  };

  const titleStyles = {
    default: "text-[var(--navy)]",
    navy: "text-white",
    light: "text-[var(--navy)]",
  };

  const descStyles = {
    default: "text-[var(--text-muted)]",
    navy: "text-gray-300",
    light: "text-[var(--text-muted)]",
  };

  return (
    <div className={`p-8 rounded-lg ${variantStyles[variant]}`}>
      <h3 className={`heading-md mb-3 ${titleStyles[variant]}`}>{title}</h3>
      {description && (
        <p className={`mb-6 ${descStyles[variant]}`}>{description}</p>
      )}
      <div className="flex flex-wrap gap-4">
        {buttons.map((button, index) => {
          const buttonClass =
            button.variant === "secondary"
              ? "btn-secondary"
              : button.variant === "outline"
              ? "btn-outline"
              : "btn-primary";
          return (
            <Link key={index} href={button.href} className={buttonClass}>
              {button.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
