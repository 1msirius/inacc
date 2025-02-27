import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
}

function SocialLink({ href, icon: Icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#F06321] hover:dark:text-[#FF8040] duration-300"
    >
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="hidden md:flex text-xl gap-4">
      <SocialLink href="#" icon={FaXTwitter} />
      <SocialLink href="#" icon={FaDiscord} />
      <SocialLink href="#" icon={BsSubstack} />
    </div>
  );
}

export function Navbar() {
  return (
    <nav className="lg:mb-20 mb-16 lg:mt-3 mt-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/acc.png"
            alt="Next.js logo"
            width={240}
            height={40}
            priority
          />
        </Link>
        <SocialLinks />
      </div>
    </nav>
  );
}
