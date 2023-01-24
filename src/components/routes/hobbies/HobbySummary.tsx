import React from 'react'

import OverviewCard from '@/components/ui/OverviewCard'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'

import { hobbiesSummary } from '@/data/HOBBIESSUMARRY'

const HobbySummary = () => {
	return (
		<SectionContainer twClasses="py-20">
			<SectionTitle sectionTitle="See other passions" />
			<div className="mx-auto grid grid-cols-1 gap-6 pya-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{hobbiesSummary.map((hobby) => (
					<OverviewCard
						img={hobby.img}
						title={hobby.title}
						overview={hobby.overview}
						workCompany={hobby.workCompany}
						position={hobby.position}
						key={hobby.title}
					/>
				))}
			</div>
		</SectionContainer>
	)
}

export default HobbySummary
