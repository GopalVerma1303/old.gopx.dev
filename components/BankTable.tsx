import React from "react";
import { BankTableProps } from "@/types";

const BankTable: React.FC<BankTableProps> = ({ resources, title }) => {
  return (
    <div className="w-full overflow-x-auto my-8">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[F3F4F6] dark:bg-[#1D1F22]">
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-black dark:text-white">
              Title
            </th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-black dark:text-white">
              Description
            </th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-black dark:text-white">
              Tags
            </th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-black dark:text-white">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? "bg-white dark:bg-transparent"
                  : "bg-[#F3F4F6] dark:bg-[#1D1F22]"
              }
            >
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white font-bold">
                {resource.title}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white italic text-sm ">
                {resource.description}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                {resource.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block bg-slate-200 dark:bg-gray-700 rounded-sm px-2 py-1 text-[10px] font-bold text-black dark:text-white mr-2 mb-2 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline text-blue-500"
                >
                  {resource.link}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankTable;
