import React from 'react'
import { motion } from 'framer-motion'

import SectionContainer from '../../../ui/SectionContainer'
import BannerDescription from './BannerDescription'

import portrait from '../../../../public/home/portrait.png'

const imageVariant = {
	hidden: {
		x: 200,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5 },
	},
}

const Banner = () => {
	return (
		<SectionContainer twClasses="pb-0 cursor-pointer group bg-black">
			<div className="flex flex-col-reverse h-[54em] items-center md:flex-row gap-10">
				<BannerDescription />
				<motion.div
					className="flex flex-wrap justify-center w-4/12 md:w-6/12  mt-auto md:mt-0"
					variants={imageVariant}
					initial="hidden"
					animate="visible"
				>
					<div className="px-4 bg-main rounded-full  min-w-[18em]">
						<img
							src={portrait.src}
							alt="Kennette James Basco"
							className="shadow rounded-full max-h-full w-auto align-middle p-6 pb-0"
						/>
					</div>
				</motion.div>
			</div>
		</SectionContainer>
	)
}

export default Banner
