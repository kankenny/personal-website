import React from 'react'

import SectionContainer from '../../../ui/SectionContainer'
import BannerDescription from './BannerDescription'

import portrait from '../../../../assets/home/portrait.png'

const Banner = () => {
	return (
		<SectionContainer twClasses=" pb-0 cursor-pointer group bg-gradient-to-b from-zinc-900 to-zinc-100">
			<div className="flex flex-row">
				<img
					src={portrait.src}
					alt="Kennette James Basco"
					className="w-[25%] hidden md:block"
				/>
				<BannerDescription />
			</div>
		</SectionContainer>
	)
}

export default Banner
