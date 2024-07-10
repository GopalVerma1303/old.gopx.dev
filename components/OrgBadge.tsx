import React from "react";
import Link from "next/link";
import Image from "next/image";

type OrgBadgeProps = {
  name: string;
  link: string;
  logo: string;
};

const OrgBadge: React.FC<OrgBadgeProps> = ({ name, link, logo }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="inline-flex items-center align-middle mx-[3px] my-[3px]  gap-[5px] font-roboto rounded-sm px-[4px] py-[0px] font-semibold hover:cursor-pointer dark:bg-white/5 dark:hover:bg-white/10 dark:text-white/50 dark:hover:text-white/70 bg-black/10 hover:bg-black/15 text-black/60 hover:text-black/70"
    >
      <Image
        src={logo}
        alt="logo"
        width={20}
        height={20}
        className="inline-block"
      />
      <span className="inline-block">{name}</span>
    </Link>
  );
};

export default OrgBadge;
