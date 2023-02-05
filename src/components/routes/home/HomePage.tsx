import React from 'react'

import Banner from './banner/Banner'
import Highlights from './highlights/Highlights'
import LatestWork from './latest-work/LatestWork'
import Body from '@/components/layout/body/Body'
import Connect from '@/components/layout/body/connect/Connect'
import Rush from './rush/Rush'
import SEO from '@/components/ui/SEO'

const HomePage = () => {
	return (
		<Body>
			<SEO
				pageTitle="Kennette Basco - Homepage"
				description="Kennette James Basco"
				content="Homepage"
			/>
			<Banner />
			<LatestWork />
			<Rush />
			<Highlights />
			<Connect connectWithMeText="Interested in utilizing my skills?" />
		</Body>
	)
}

export default HomePage
