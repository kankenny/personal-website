import React from 'react'
import Link from 'next/link'

// Components
import SectionContainer from '@/components/ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import OverviewCard from '@/components/ui/OverviewCard'

// Utility Functions
import convertTextToUrl from '@/utils/lib/convertTextToUrl'

// Hard-coded Data
import workSummary from '@/data/WORK_SUMMARY'

const Works = () => {
	return (
		<SectionContainer twClasses="py-20">
			<SectionTitle sectionTitle="My other work experiences" />
			<div className="mx-auto grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{workSummary.map((work) => (
					<Link
						legacyBehavior
						href={`/work-experience/${convertTextToUrl(
							work.title
						)}`}
						key={work.title}
					>
						<a>
							<OverviewCard entry={work} />
						</a>
					</Link>
				))}
			</div>
		</SectionContainer>
	)
}

export default Works
