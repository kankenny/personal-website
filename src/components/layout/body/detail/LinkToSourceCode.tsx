import React from 'react'
import { motion } from 'framer-motion'

type Props = {
	sourceCode: string
}

const divVariant = {
	hidden: {
		opacity: 0,
		scale: 0.8,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.2 },
	},
}

const LinkToSourceCode = ({ sourceCode }: Props) => {
	return (
		<motion.div
			className="mx-auto text-4xl text-white font-bold underline duration-200 hover:text-white bg-darkGray hover:bg-black rounded-lg px-5 py-2 border-2 border-black my-4 hover:border-white"
			variants={divVariant}
			initial="hidden"
			animate="visible"
			viewport={{ once: true, amount: 0.3 }}
		>
			<a href={sourceCode} target="_blank" rel="noreferrer noopener">
				See the source code here
			</a>
		</motion.div>
	)
}

export default LinkToSourceCode
