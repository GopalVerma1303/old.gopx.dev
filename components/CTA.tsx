import Link from "next/link";
import React, { useEffect } from "react";
import { FiPhoneCall } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const CTA = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.a
      href="https://cal.com/bettercallgopal/15min"
      style={{
        border,
        boxShadow,
        textDecoration: "none",
      }}
      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      className="group relative flex w-fit items-center gap-1.5 rounded-full dark:bg-gray-950/10 px-4 py-2 transition-colors dark:hover:bg-gray-950/50"
    >
      Book a call
      <FiPhoneCall className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
    </motion.a>
  );
};
