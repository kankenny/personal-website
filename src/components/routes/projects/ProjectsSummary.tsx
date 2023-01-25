import React from 'react'
import Link from 'next/link'

// Components
import SectionContainer from '@/components/ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import OverviewCard from '@/components/ui/OverviewCard'

// Utility Functions
import convertTextToUrl from '@/utils/lib/convertTextToUrl'

// Hard-coded data
import projectSummary from '@/data/PROJECT_SUMMARY'

const ProjectsSummary = () => {
	return (
		<SectionContainer twClasses="py-20">
			<SectionTitle sectionTitle="See more of my projects" />
			<div className="mx-auto grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{projectSummary.map((project) => (
					<Link
						legacyBehavior
						href={`/projects/${convertTextToUrl(
							project.title
						)}`}
						key={project.title}
					>
						<a>
							<OverviewCard entry={project} />
						</a>
					</Link>
				))}
			</div>
		</SectionContainer>
	)
}

export default ProjectsSummary
