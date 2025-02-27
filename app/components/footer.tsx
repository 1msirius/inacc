"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaRedditAlien,
  FaDiscord,
} from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";
// import { TbMailFilled } from "react-icons/tb";
import LastUpdated from "./updated";

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType;
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
    <div className="flex text-lg gap-4">
      <SocialLink href="#" icon={FaXTwitter} />
      <SocialLink href="#" icon={FaDiscord} />
      <SocialLink href="#" icon={FaGithub} />
      <SocialLink href="#" icon={FaRedditAlien} />
      <SocialLink href="#" icon={BsSubstack} />
      {/* <SocialLink href="#" icon={TbMailFilled} /> */}
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-20 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <LastUpdated />
        <SocialLinks />
      </div>
    </small>
  );
}