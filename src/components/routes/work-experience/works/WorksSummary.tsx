import React from 'react'

import SectionContainer from '@/components/ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import OverviewCard from '@/components/ui/OverviewCard'
import { workSummaries } from '@/data/WORKSUMMARIES'

const Works = () => {
	return (
		<SectionContainer twClasses="py-20">
			<SectionTitle sectionTitle="My other work experiences" />
			<div className="mx-auto grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{workSummaries.map((workSummary) => (
					<OverviewCard
						img={workSummary.img}
						title={workSummary.title}
						overview={workSummary.overview}
						workCompany={workSummary.workCompany}
						position={workSummary.position}
						key={workSummary.title}
					/>
				))}
			</div>
		</SectionContainer>
	)
}

export default Works
