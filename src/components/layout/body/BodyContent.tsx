import React from 'react'
import Banner from './banner/Banner'
import Highlights from './highlights/Highlights'
import LatestWork from './latest-work/LatestWork'

const BodyContent = () => {
	return (
		<div className="flex flex-col justify-between mx-auto align-middle">
			<Banner></Banner>
			<LatestWork></LatestWork>
			<Highlights></Highlights>
		</div>
	)
}

export default BodyContent
