import React from 'react'

import SectionContainer from '../../../ui/SectionContainer'
import BannerDescription from './BannerDescription'

import portrait from '../../../../assets/home/portrait.png'

const Banner = () => {
	return (
		<SectionContainer twClasses="bg-zinc-100 pb-0 cursor-pointer group">
			<div className="flex flex-row  items-center">
				<img
					src={portrait.src}
					alt="Kennette James Basco"
					className="w-[35%] hidden md:block"
				/>
				<BannerDescription />
			</div>
		</SectionContainer>
	)
}

export default Banner
