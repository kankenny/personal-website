import React from 'react'

import Banner from './banner/Banner'
import Highlights from './highlights/Highlights'
import LatestWork from './latest-work/LatestWork'
import Body from '@/components/layout/body/Body'
import Connect from '@/components/layout/body/connect/Connect'

const HomePage = () => {
	return (
		<Body>
			<Banner />
			<LatestWork />
			<Highlights />
			<Connect connectWithMeText="Interested in utilizing my skills?" />
		</Body>
	)
}

export default HomePage
