// Badge.tsx
import React from "react";
import { cn } from "@/utils/cn";

interface BadgeProps {
  label: string;
  color: "red" | "blue" | "green" | "yellow" | "purple";
}

const colorClasses = {
  red: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300",
  blue: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300",
  green: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300",
  yellow:
    "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300",
  purple:
    "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300",
};

const Badge: React.FC<BadgeProps> = ({ label, color }) => {
  return (
    <span
      className={cn(
        "rounded-sm items-center flex flex-wrap gap-2 text-xs font-extrabold px-2 py-0.5",
        colorClasses[color],
      )}
    >
      {label}
    </span>
  );
};

export default Badge;
