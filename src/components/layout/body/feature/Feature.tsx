import React from "react";
import Image, { StaticImageData } from "next/image";

import SectionContainer from "@/components/ui/SectionContainer";

type Props = {
  img: StaticImageData | string;
  title: string;
  description: string;
  featureType: string;
};

const Feature = ({ img, title, description, featureType }: Props) => {
  return (
    <SectionContainer twClasses="p-5 md:p-20 flex flex-col group">
      <Image
        src={img}
        alt={title}
        className="bg-black mx-auto w-full h-auto rounded-lg shadow-xl duration-200 cursor-pointer mb-2"
      />
      <div className="py-4 flex flex-col gap-4 cursor-pointer ">
        <div>
          <h1 className="text-4xl font-bold capitalize text-main">{title}</h1>
          <h2 className="text-gray text-sm">{featureType}</h2>
        </div>
        <div className="flex justify-between">
          <p className="max-w-[75%] text-lg">{description}</p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="5em"
            width="5em"
            className="opacity-0 group-hover:opacity-100 duration-200 text-main"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline
              fill="none"
              strokeWidth="3"
              points="7 2 17 12 7 22"
            ></polyline>
          </svg>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Feature;
