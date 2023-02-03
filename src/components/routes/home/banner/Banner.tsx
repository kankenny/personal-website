import React from 'react'

import SectionContainer from '../../../ui/SectionContainer'
import BannerDescription from './BannerDescription'

import portrait from '../../../../public/home/portrait.png'
import Image from 'next/image'

const Banner = () => {
	return (
		<SectionContainer twClasses="pb-0 cursor-pointer group bg-black">
			<div className="flex flex-col-reverse h-[50em] items-center md:flex-row gap-10">
				<BannerDescription />
				<div className="flex flex-wrap justify-center w-4/12 md:w-6/12  mt-auto md:mt-0">
					<div className="px-4 bg-main rounded-full  min-w-[18em]">
						<img
							src={portrait.src}
							alt="Kennette James Basco"
							className="shadow rounded-full max-h-full w-auto align-middle p-6 pb-0"
						/>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}

export default Banner
