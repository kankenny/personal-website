import React from 'react'

import SectionContainer from '../../../ui/SectionContainer'
import BannerDescription from './BannerDescription'

import portrait from '../../../../assets/home/portrait.png'

const Banner = () => {
	return (
		<SectionContainer twClasses="pb-0 cursor-pointer group bg-zinc-900">
			<div className="flex flex-col h-[75em] items-center md:flex-row">
				{/* <img
					src={portrait.src}
					alt="Kennette James Basco"
					className="w-[25%] hidden md:block"
				/> */}
				<div className="flex flex-wrap justify-center w-4/12 md:w-6/12  mt-auto md:mt-0">
					<div className="px-4 bg-purple-500 rounded-full  min-w-[15em]">
						<img
							src={portrait.src}
							alt="Kennette James Basco"
							className="shadow rounded-full max-h-full w-auto align-middle p-6 pb-0"
						/>
					</div>
				</div>
				<BannerDescription />
			</div>
		</SectionContainer>
	)
}

export default Banner
