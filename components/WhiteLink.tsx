import Link from "next/link";
import React, { SVGProps } from "react";

type WhiteLinkProps = {
  text: string;
  Icon?: React.FC<SVGProps<SVGSVGElement>>;
  link: string;
};

const WhiteLink: React.FC<WhiteLinkProps> = ({
  Icon,
  text,
  link,
}: WhiteLinkProps) => {
  return (
    <Link
      href={link}
      className={`inline-flex justify-center items-center mx-[4px] font-bold ${
        Icon ? "pb-1" : ""
      } rounded-none w-fit border-b border-white/30 hover:border-current transition-colors duration-500`}
    >
      {Icon && <Icon className="mr-1" />}
      {text}
    </Link>
  );
};

export default WhiteLink;
