import React from 'react'

import SectionContainer from '@/components/ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import OverviewCard from '@/components/ui/OverviewCard'

import workSummary from '@/data/WORK_SUMMARY'
import Link from 'next/link'
import convertTextToUrl from '@/utils/lib/convertTextToUrl'

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
							<OverviewCard
								img={work.img}
								title={work.title}
								overview={work.overview}
								workCompany={work.workCompany}
								position={work.position}
							/>
						</a>
					</Link>
				))}
			</div>
		</SectionContainer>
	)
}

export default Works
