import Image from 'next/image';

import logoNoBg from '../../assets/web/logo-no-bg.png';
import logoBlackBg from '../../assets/web/logo-black-bg.png';
import logoRoundBlack from '../../assets/web/logo-round-black.png';

type LogoVariant = 'no-bg' | 'black-bg' | 'round-black';

interface SiteLogoProps {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
}

const logoByVariant = {
  'no-bg': logoNoBg,
  'black-bg': logoBlackBg,
  'round-black': logoRoundBlack,
} as const;

export default function SiteLogo({
  variant = 'no-bg',
  className = 'h-9 w-auto',
  priority = false,
}: SiteLogoProps) {
  return (
    <Image
      src={logoByVariant[variant]}
      alt="diigicards"
      priority={priority}
      className={className}
    />
  );
}
