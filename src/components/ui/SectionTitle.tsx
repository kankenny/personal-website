import React from "react";

type Props = {
  sectionTitle: string;
};

const SectionTitle = ({ sectionTitle }: Props) => {
  return (
    <div className="p-4">
      <h2 className="uppercase mx-auto text-gray text-sm md:text-md font-bold text-center border-b-gray border-b leading-[.1em] mt-[10px] my-[20px]">
        <span className={`px-[20px] tracking-widest bg-zinc-100`}>
          {sectionTitle}
        </span>
      </h2>
    </div>
  );
};

export default SectionTitle;
