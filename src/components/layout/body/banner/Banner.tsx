import React from 'react'

import portrait from '../../../../assets/home/portrait.png'

import SectionContainer from '../../../ui/SectionContainer'

const Banner = () => {
	return (
		<SectionContainer twClasses="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 group pb-0">
			<div className="flex flex-row justify-between items-center">
				<img
					src={portrait.src}
					alt="Kennette James Basco"
					className="group-hover:opacity-30 duration-700 bottom-0"
				/>
			</div>
		</SectionContainer>
	)
}

export default Banner
