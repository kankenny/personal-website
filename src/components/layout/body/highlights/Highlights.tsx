import React from 'react'

import SectionContainer from '../../../ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import LatestWorkList from '../latest-work/LatestWorkList'

const Highlights = () => {
	return (
		<SectionContainer>
			<SectionTitle
				sectionTitle="my proudest achievements"
				isOdd={false}
			/>
			<LatestWorkList></LatestWorkList>
		</SectionContainer>
	)
}

export default Highlights
