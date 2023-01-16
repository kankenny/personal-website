import React from 'react'

import Banner from '@/components/layout/body/banner/Banner'
import Highlights from '@/components/layout/body/highlights/Highlights'
import LatestWork from '@/components/layout/body/latest-work/LatestWork'

const Home = () => {
	return (
		<div className="flex flex-col h-full">
			<Banner />
			<LatestWork />
			<Highlights />
		</div>
	)
}

export default Home
