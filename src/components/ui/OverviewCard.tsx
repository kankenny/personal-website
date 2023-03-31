// Layout component for features listed in the child directory of the root page

import React from "react"
import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"

import Card from "./Card"

type Props = {
  entry: {
    img: StaticImageData
    title: string
    overview: string
    workCompany: string
    position: string
    date?: string
  }
}

const cardVariant = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
}

const OverviewCard = ({ entry }: Props) => {
  return (
    <motion.div variants={cardVariant}>
      <Card twClasses="rounded-xl p-2 border hover:shadow-xl hover:transform hover:scale-105 hover:border-black duration-200 group cursor-pointer min-h-[30em] flex flex-col justify-between relative ease-in-out">
        <div className="space-y-2 text-main">
          <Image
            src={entry.img}
            alt={entry.title}
            className="h-64 object-cover overflow-hidden rounded-xl shadow-md duration-200"
          />
          <h2 className="text-xl font-bold ">{entry.title}</h2>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="4em"
            width="6em"
            className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 transform -translate-x-1/2 top-[6em] hidden sm:block inset-x-32 "
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline
              fill="none"
              strokeWidth="2.5"
              points="7 2 17 12 7 22"
            ></polyline>
          </svg>
        </div>
        <div className="text-xs">
          <div className="pb-2">
            <div className="mt-1 pt-3 flex justify-between">
              <p className="pr-4">{entry.overview}</p>
              {entry.date && <p>{entry.date}</p>}
            </div>
          </div>
          <div className="gap-2 items-center text-main border-t-gray border-t group-hover:border-t-black mt-2 pt-2">
            {entry.position && entry.workCompany && (
              <div>
                <span className="font-bold">{entry.position}</span>
                <span className="text-gray pl-1">
                  {`@${entry.workCompany}`}
                </span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default OverviewCard
