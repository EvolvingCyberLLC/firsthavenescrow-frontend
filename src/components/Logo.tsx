import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  linkToHome?: boolean;
  showText?: boolean;
  textClassName?: string;
}

export default function Logo({
  className = "",
  linkToHome = true,
  showText = true,
  textClassName = "",
}: LogoProps) {
  const logoContent = (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10">
        <Image
          src="/logo.png"
          alt="Haven Escrow Logo"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className={`text-xl font-bold ${textClassName || "text-navy"}`}>
          Haven Escrow
        </span>
      )}
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
