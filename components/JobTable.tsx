// JobTable.tsx
import React from "react";
import { Job } from "@/types";
import Badge from "@/components/Badge";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { cn } from "@/utils/cn";

interface JobTableProps {
  job: Job;
  themeColor: "red" | "blue" | "green" | "yellow" | "purple";
}

const themeColorClasses = {
  red: "text-red-500 dark:text-red-400",
  blue: "text-blue-500 dark:text-blue-400",
  green: "text-green-500 dark:text-green-400",
  yellow: "text-yellow-500 dark:text-yellow-400",
  purple: "text-purple-500 dark:text-purple-400",
};

const JobTable: React.FC<JobTableProps> = ({ job, themeColor }) => {
  const rows = [
    { label: "NAME", value: job.officialName },
    { label: "WEBSITE", value: job.website },
    { label: "INDUSTRY", value: job.industryType },
    { label: "LOCATION", value: job.location },
    { label: "DURATION", value: job.duration },
    { label: "POSITION", value: job.position },
    { label: "TECH STACK", value: job.techStack },
    { label: "HIGHLIGHTS", value: job.highlights },
  ];

  return (
    <div className="mb-8 flex flex-col gap-2 max-w-3xl mx-auto">
      {rows.map((row, index) => (
        <div
          key={index}
          className="flex justify-between items-start flex-wrap gap-2 pb-2 border-black/20 dark:border-white/20 border-b-[0.5px]"
        >
          <Badge label={row.label} color={themeColor} />
          <span className="text-sm lg:w-[600px] md:w-[550px] w-[230px] font-roboto  text-justify">
            {row.label === "WEBSITE" ? (
              <Link
                href={job.website}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "underline flex items-center gap-1",
                  themeColorClasses[themeColor],
                )}
              >
                Visit Website <FaExternalLinkAlt />
              </Link>
            ) : (
              row.value
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default JobTable;
