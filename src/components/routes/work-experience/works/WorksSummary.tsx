import React from 'react'

import SectionContainer from '@/components/ui/SectionContainer'
import CardHighlightClass from '@/utils/data-models/CardHighlightClass'
import SectionTitle from '@/components/ui/SectionTitle'
import OverviewCard from '@/components/ui/OverviewCard'

const Works = () => {
	const dummyImage = 'https://unsplash.com/photos/sf_1ZDA1YFw'

	const workSummaries = [
		new CardHighlightClass(
			dummyImage,
			'Supplemental Instruction Leader',
			'Assisted students by conducting biweekly sessions to teach integral calculus',
			'New York Institute of Technology',
			'Student Tutor'
		),
		new CardHighlightClass(
			dummyImage,
			'Undergraduate Research Assistant',
			'Assisted students by conducting biweekly sessions to teach integral calculus',
			'New York Institute of Technology',
			'Student'
		),
		new CardHighlightClass(
			dummyImage,
			'Supplemental Instruction Leadera',
			'Assisted students by conducting biweekly sessions to teach integral calculus',
			'New York Institute of Technology',
			'Student Tutor'
		),
		new CardHighlightClass(
			dummyImage,
			'Undergraduate Research Assistants',
			'Assisted students by conducting biweekly sessions to teach integral calculus',
			'New York Institute of Technology',
			'Student'
		),
		new CardHighlightClass(
			dummyImage,
			'Supplemental Instruction Leaderd',
			'Assisted students by conducting biweekly sessions to teach integral calculus',
			'New York Institute of Technology',
			'Student Tutor'
		),
		new CardHighlightClass(
			dummyImage,
			'Undergraduate Research Assistantf',
			'Assisted students by conducting biweekly sessions to teach integral calculus',
			'New York Institute of Technology',
			'Student'
		),
	]

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
