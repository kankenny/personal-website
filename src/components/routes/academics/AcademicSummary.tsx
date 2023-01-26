import React from 'react'
import Link from 'next/link'

// Components
import OverviewCard from '@/components/ui/OverviewCard'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'

// Utility Functions
import convertTextToUrl from '@/utils/lib/convertTextToUrl'

// Hard-coded Data
import academicSummary from '@/data/ACADEMIC_SUMMARY'

const AcademicSummary = () => {
	return (
		<SectionContainer twClasses="py-20">
			<SectionTitle sectionTitle="Other academic achievements" />
			<div className="mx-auto grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{academicSummary.map((academic, index) => (
					<Link
						legacyBehavior
						href={`/academics/${convertTextToUrl(
							academic.title
						)}`}
						key={academic.title}
					>
						<a>
							<OverviewCard entry={academic} />
						</a>
					</Link>
				))}
			</div>
		</SectionContainer>
	)
}

export default AcademicSummary
