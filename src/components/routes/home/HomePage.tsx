import React from 'react'

import Banner from './banner/Banner'
import Highlights from './highlights/Highlights'
import LatestWork from './latest-work/LatestWork'
import Body from '@/components/layout/body/Body'

const HomePage = () => {
	return (
		<Body>
			<Banner />
			<LatestWork />
			<Highlights />
		</Body>
	)
}

export default HomePage
