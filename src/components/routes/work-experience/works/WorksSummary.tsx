import Card from '@/components/ui/Card'
import SectionContainer from '@/components/ui/SectionContainer'
import React from 'react'
import WorkCard from './WorkCard'

import WorkCardClass from '@/utils/data-models/WorkCardClass'

const Works = () => {
	const dummyImage = 'https://unsplash.com/photos/sf_1ZDA1YFw'

	const workSummaries = [
		new WorkCardClass(
			dummyImage,
			'Supplemental Instruction Leader',
			'Assisted students by conducting biweekly sessions to teach integral calculus',
			'New York Institute of Technology',
			'Student Tutor'
		),
		new WorkCardClass(
			dummyImage,
			'Undergraduate Research Assistant',
			'Assisted students by conducting biweekly sessions to teach integral calculus',
			'New York Institute of Technology',
			'Student'
		),
		new WorkCardClass(
			dummyImage,
			'Supplemental Instruction Leadera',
			'Assisted students by conducting biweekly sessions to teach integral calculus',
			'New York Institute of Technology',
			'Student Tutor'
		),
		new WorkCardClass(
			dummyImage,
			'Undergraduate Research Assistants',
			'Assisted students by conducting biweekly sessions to teach integral calculus',
			'New York Institute of Technology',
			'Student'
		),
		new WorkCardClass(
			dummyImage,
			'Supplemental Instruction Leaderd',
			'Assisted students by conducting biweekly sessions to teach integral calculus',
			'New York Institute of Technology',
			'Student Tutor'
		),
		new WorkCardClass(
			dummyImage,
			'Undergraduate Research Assistantf',
			'Assisted students by conducting biweekly sessions to teach integral calculus',
			'New York Institute of Technology',
			'Student'
		),
	]

	return (
		<SectionContainer twClasses="py-20">
			<div className="mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{workSummaries.map((workSummary) => (
					<WorkCard
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
