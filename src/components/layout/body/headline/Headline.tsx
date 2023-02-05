import React from 'react'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

import SectionContainer from '@/components/ui/SectionContainer'

type Props = {
	headlineTitle: string
	description: string
	img: StaticImageData | string
}

const imageVariant = {
	hidden: {
		opacity: 0,
		scale: 0.5,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			type: 'spring',
		},
	},
}

const Headline = ({ headlineTitle, description, img }: Props) => {
	return (
		<SectionContainer twClasses="pb-0 p-5 md:p-15 md:pb-10">
			<div className="flex flex-col md:flex-row justify-between items-center">
				<div className="flex flex-col flex-grow w-full md:w-[65%]">
					<h1 className="border-b border-gray-600 text-5xl capitalize pb-4">
						{headlineTitle}
					</h1>
					<p className="pt-4">{description}</p>
				</div>
				<motion.div
					className="w-full items-center"
					variants={imageVariant}
					initial="hidden"
					animate="visible"
				>
					<Image src={img} alt={headlineTitle}></Image>
				</motion.div>
			</div>
		</SectionContainer>
	)
}

export default Headline
