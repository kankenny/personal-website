import React from 'react'

import SectionContainer from '@/components/ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import OverviewCard from '@/components/ui/OverviewCard'

import { projectSummaries } from '@/data/PROJECTSUMMARIES'

const ProjectsSummary = () => {
	return (
		<SectionContainer twClasses="py-20">
			<SectionTitle sectionTitle="See more of my projects" />
			<div className="mx-auto grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{projectSummaries.map((project) => (
					<OverviewCard
						img={project.img}
						title={project.title}
						overview={project.overview}
						workCompany={project.workCompany}
						position={project.position}
						key={project.title}
					/>
				))}
			</div>
		</SectionContainer>
	)
}

export default ProjectsSummary
