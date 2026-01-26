import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  linkToHome?: boolean;
  showText?: boolean;
  textClassName?: string;
}

export default function Logo({ className = "", linkToHome = true }: LogoProps) {
  const logoContent = (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-32">
        <Image
          src="/logo.png"
          alt="Haven Escrow Logo"
          width={666}
          height={128}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );

  if (linkToHome) {
    return (
      <Link href="/" className="flex items-center">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
