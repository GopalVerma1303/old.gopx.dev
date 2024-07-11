import Link from "next/link";
import { format, parseISO } from "date-fns";
import React, { useState, useRef, useLayoutEffect } from "react";

// @ts-ignore
export default function BlogRow({ page }) {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const hoverContentRef = useRef<HTMLDivElement>(null);

  const formattedDate = page.frontMatter?.date
    ? format(parseISO(page.frontMatter.date), "MMM dd")
    : null;

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
      href={page.route}
      ref={linkRef}
      style={{ color: "inherit", textDecoration: "none" }}
      className="group flex flex-col md:flex-row justify-between items-start md:items-center gap-[4px] md:gap-[12px] w-full opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out my-[10px] relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex gap-[5px] items-center">
        <p className="text-xl group-hover:underline">
          {page.meta?.title || page.frontMatter?.title || page.name}
        </p>
        <p className="text-xs transform transition-transform duration-200 ease-in-out group-hover:animate-flicker">
          {"↗"}
        </p>
      </div>
      <div className="flex gap-[8px] items-center flex-shrink-0">
        {formattedDate && <p className="opacity-50 text-sm">{formattedDate}</p>}
        {formattedDate && page.frontMatter?.readTime && (
          <p className="opacity-50 text-sm">•</p>
        )}
        {page.frontMatter?.readTime && (
          <p className="opacity-50 text-sm">{page.frontMatter.readTime} mins</p>
        )}
      </div>
      {false && page.frontMatter?.description && (
        <div
          ref={hoverContentRef}
          className={`absolute dark:bg-[#111111] bg-[#FFFFFF] border-[#e6e6e6] border dark:border-[#333333] p-2 rounded shadow-md z-10 transition-opacity duration-300 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: "300px",
            transform: "translateX(-50%)",
          }}
        >
          <span className="text-sm opacity-50">
            {page.frontMatter.description}
          </span>
        </div>
      )}
    </Link>
  );
}
