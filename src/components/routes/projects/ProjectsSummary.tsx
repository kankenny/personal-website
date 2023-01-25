import React from 'react'
import Link from 'next/link'

import SectionContainer from '@/components/ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import OverviewCard from '@/components/ui/OverviewCard'

import projectSummary from '@/data/PROJECT_SUMMARY'

const ProjectsSummary = () => {
	return (
		<SectionContainer twClasses="py-20">
			<SectionTitle sectionTitle="See more of my projects" />
			<div className="mx-auto grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{projectSummary.map((project) => (
					<Link
						href={`/projects/asdf`}
						key={project.title}
						passHref
					>
						<OverviewCard
							img={project.img}
							title={project.title}
							overview={project.overview}
							workCompany={project.workCompany}
							position={project.position}
						/>
					</Link>
				))}
			</div>
		</SectionContainer>
	)
}

export default ProjectsSummary
