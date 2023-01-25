import React from 'react'
import Link from 'next/link'

import OverviewCard from '@/components/ui/OverviewCard'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'

import convertTextToUrl from '@/utils/lib/convertTextToUrl'

import hobbySummary from '@/data/HOBBY_SUMMARY'

const HobbySummary = () => {
	return (
		<SectionContainer twClasses="py-20">
			<SectionTitle sectionTitle="See other passions" />
			<div className="mx-auto grid grid-cols-1 gap-6 pya-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{hobbySummary.map((hobby) => (
					<Link
						legacyBehavior
						href={`/hobbies/${convertTextToUrl(hobby.title)}`}
						key={hobby.title}
					>
						<a>
							<OverviewCard
								img={hobby.img}
								title={hobby.title}
								overview={hobby.overview}
								workCompany={hobby.workCompany}
								position={hobby.position}
								key={hobby.title}
							/>
						</a>
					</Link>
				))}
			</div>
		</SectionContainer>
	)
}

export default HobbySummary
