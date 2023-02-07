import React from 'react'
import { motion } from 'framer-motion'

import SectionContainer from '@/components/ui/SectionContainer'
import Image, { StaticImageData } from 'next/image'

type Props = {
	detail: {
		title: string
		img: StaticImageData | string
		description: string
	}
}

const detailSectionVariant = {
	hidden: {
		opacity: 0,
		x: -15,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.4,
		},
	},
}

const DetailSection = ({ detail }: Props) => {
	return (
		<SectionContainer twClasses="flex flex-col shadow-none pb-0 border-none">
			<motion.div
				className="gap-10 py-10 flex flex-col"
				variants={detailSectionVariant}
				initial="hidden"
				whileInView={'visible'}
				viewport={{ once: true, amount: 0.3 }}
			>
				<Image
					src={detail.img}
					alt={detail.title}
					className="w-full rounded-lg shadow-lg"
					quality={100}
				/>
				<div className="w-3/4 mx-auto space-y-10">
					<h1 className="text-3xl md:text-4xl font-bold mb-4">
						{detail.title}
					</h1>
					<p className="text-lg leading-8 md:text-xl">
						{detail.description}
					</p>
				</div>
			</motion.div>
		</SectionContainer>
	)
}

export default DetailSection
