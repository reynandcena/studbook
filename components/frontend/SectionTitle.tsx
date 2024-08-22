import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="py-4 border-b text-base font-semibold mt-6">{title}</div>
  );
};

export default SectionTitle;
