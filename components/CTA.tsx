import Link from "next/link";
import React, { useEffect } from "react";
import { FiPhoneCall } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

import { getCalApi } from "@calcom/embed-react";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const CTA = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

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
    <motion.button
      data-cal-namespace=""
      data-cal-link="bettercallgopal/personalizedcall"
      data-cal-config='{"layout":"month_view"}'
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
      className="group relative flex w-fit items-center gap-1.5 rounded-full dark:bg-gray-950/10 px-6 py-3 transition-colors dark:hover:bg-gray-950/50 text-xs sm:text-sm md:text-md"
    >
      Book a call
      <FiPhoneCall className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
    </motion.button>
  );
};
