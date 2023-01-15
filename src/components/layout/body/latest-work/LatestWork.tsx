import React from 'react'

import SectionTitle from '@/components/ui/SectionTitle'
import SectionContainer from '../section-container/SectionContainer'

const LatestWork = () => {
	return (
		<SectionContainer twClasses="bg-zinc-200">
			<SectionTitle
				sectionTitle="some of my latest work"
				isOdd={true}
			/>
		</SectionContainer>
	)
}

export default LatestWork
