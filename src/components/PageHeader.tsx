import Link from "next/link";

interface PageHeaderProps {
  title: string;
  description?: string;
  effectiveDate?: string;
  ctaButton?: {
    label: string;
    href: string;
  };
  centered?: boolean;
}

export default function PageHeader({
  title,
  description,
  effectiveDate,
  ctaButton,
  centered = false,
}: PageHeaderProps) {
  return (
    <section className="bg-[var(--light-gray)] py-16 lg:py-20">
      <div className="container-custom">
        <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
          <h1 className="heading-xl mb-6">{title}</h1>
          {effectiveDate && (
            <p className="text-sm text-[var(--text-muted)] mb-4">
              Effective Date: {effectiveDate}
            </p>
          )}
          {description && (
            <p className="text-lg text-[var(--text-muted)] mb-8">
              {description}
            </p>
          )}
          {ctaButton && (
            <Link href={ctaButton.href} className="btn-primary">
              {ctaButton.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
