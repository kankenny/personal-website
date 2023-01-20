import React from 'react'

import Body from '@/components/layout/body/Body'
import Banner from '../home/banner/Banner'
import WorksSummary from './works/WorksSummary'
import Feature from '@/components/layout/feature/Feature'

const WorkExperience = () => {
	return (
		<Body>
			<Banner />
			<Feature></Feature>
			<WorksSummary></WorksSummary>
		</Body>
	)
}

export default WorkExperience
