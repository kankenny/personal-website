import React from "react"
import { motion } from "framer-motion"

const textVariant = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

const BannerDescription = () => {
  return (
    <motion.div
      className="w-full text-white text-2xl  md:text-4xl space-y-10 text-center p-10 md:pr-0 md:mx-auto md:text-left my-auto font-bold"
      variants={textVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-darkGray rounded-md max-w-max p-6">
        <div className="group-hover:underline decoration-white group-hover:text-main group-hover:decoration-main  duration-300">
          <p>Hi there! My name is</p>
          <h1>Kennette James Basco</h1>
          <p>— Frontend Web Developer</p>
        </div>
      </div>
    </motion.div>
  )
}

export default BannerDescription
