import { useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import React, { SVGProps, useState, useRef } from "react";

type WhiteLinkProps = {
  text: string;
  Icon?: React.FC<SVGProps<SVGSVGElement>>;
  link: string;
  hoverMessage?: string;
  hoverImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const WhiteLink: React.FC<WhiteLinkProps> = ({
  Icon,
  text,
  link,
  hoverMessage,
  hoverImage,
}: WhiteLinkProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const hoverContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (linkRef.current && hoverContentRef.current) {
        const linkRect = linkRef.current.getBoundingClientRect();
        const hoverRect = hoverContentRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - linkRect.left,
          y: e.clientY - linkRect.top - hoverRect.height - 10,
        });
      }
    };

    if (isHovering) {
      document.addEventListener("mousemove", handleMouseMove);
      setTimeout(() => setIsVisible(true), 50);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      setIsVisible(false);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering]);

  return (
    <Link
      href={link}
      ref={linkRef}
      className={`inline-flex justify-center items-center mx-[4px] font-bold ${
        Icon ? "pb-1" : ""
      } rounded-none w-fit border-b border-black/30 dark:border-white/30 dark:hover:border-white/90 hover:border-black/90 transition-colors duration-500 relative`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {Icon && <Icon className="mr-1" />}
      {text}
      {isHovering && (hoverMessage || hoverImage) && (
        <div
          ref={hoverContentRef}
          className={`absolute dark:bg-[#111111] bg-[#FFFFFF] border-[#e6e6e6] border dark:border-[#333333] rounded shadow-md z-10 transition-opacity duration-300 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: hoverImage ? `${hoverImage.width}px` : "auto",
            transform: "translateX(-50%)",
          }}
        >
          {hoverMessage && <span>{hoverMessage}</span>}
          {hoverImage && (
            <Image
              src={hoverImage.src}
              alt={hoverImage.alt}
              width={hoverImage.width}
              height={hoverImage.height}
              className="rounded"
            />
          )}
        </div>
      )}
    </Link>
  );
};

export default WhiteLink;
