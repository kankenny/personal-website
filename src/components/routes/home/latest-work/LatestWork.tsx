import React from 'react'

import SectionContainer from '../../../ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import LatestWorkList from './LatestWorkList'

const LatestWork = () => {
	return (
		<SectionContainer twClasses="bg-zinc-200">
			<SectionTitle
				sectionTitle="some of my latest work"
				isOdd={true}
			/>
			<LatestWorkList />
		</SectionContainer>
	)
}

export default LatestWork
