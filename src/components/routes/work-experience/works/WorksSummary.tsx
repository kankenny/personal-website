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
			'New York Institute of Technology',
			'Student Tutor'
		),
		new WorkCardClass(
			dummyImage,
			'Undergraduate Research Assistant',
			'New York Institute of Technology',
			'Student'
		),
		new WorkCardClass(
			dummyImage,
			'Supplemental Instruction Leadera',
			'New York Institute of Technology',
			'Student Tutor'
		),
		new WorkCardClass(
			dummyImage,
			'Undergraduate Research Assistants',
			'New York Institute of Technology',
			'Student'
		),
		new WorkCardClass(
			dummyImage,
			'Supplemental Instruction Leaderd',
			'New York Institute of Technology',
			'Student Tutor'
		),
		new WorkCardClass(
			dummyImage,
			'Undergraduate Research Assistantf',
			'New York Institute of Technology',
			'Student'
		),
	]

	return (
		<SectionContainer twClasses="p-5 md:p-20">
			<ul className=" flex flex-col flex-wrap items-center md:flex-row gap-10 p-10 w-full">
				{workSummaries.map((workSummary) => (
					<WorkCard
						img={workSummary.img}
						title={workSummary.title}
						workCompany={workSummary.workCompany}
						position={workSummary.position}
						key={workSummary.title}
					/>
				))}
			</ul>
		</SectionContainer>
	)
}

export default Works
