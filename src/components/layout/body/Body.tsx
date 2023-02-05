import React from 'react'
import { motion } from 'framer-motion'

import BodyContainer from './BodyContainer'

type Props = {
	children: React.ReactNode
}

const bodyVariants = {
	hidden: {
		opacity: 0,
		x: -20,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.25,
		},
	},
}

const Body = ({ children }: Props) => {
	return (
		<motion.div
			variants={bodyVariants}
			initial="hidden"
			animate="visible"
			className="h-full"
		>
			<BodyContainer>{children}</BodyContainer>
		</motion.div>
	)
}

export default Body
