import React from 'react'

import OverviewCard from '@/components/ui/OverviewCard'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'

import academicSummary from '@/data/ACADEMIC_SUMMARY'

const AcademicSummary = () => {
	return (
		<SectionContainer twClasses="py-20">
			<SectionTitle sectionTitle="Other academic achievements" />
			<div className="mx-auto grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{academicSummary.map((academic) => (
					<OverviewCard
						img={academic.img}
						title={academic.title}
						overview={academic.overview}
						workCompany={academic.workCompany}
						position={academic.position}
						key={academic.title}
					/>
				))}
			</div>
		</SectionContainer>
	)
}

export default AcademicSummary
