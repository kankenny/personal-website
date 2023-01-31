import React from 'react'
import Link from 'next/link'

// Components
import OverviewCard from '@/components/ui/OverviewCard'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'

// Utility Functions
import convertTextToUrl from '@/utils/lib/convertTextToUrl'

// Hard-coded Data
import hobbySummary from '@/data/HOBBY_SUMMARY'

type Props = {
	excludeTitle?: string
}

const HobbySummary = ({ excludeTitle }: Props) => {
	let filtered: any[] = []

	if (excludeTitle) {
		filtered = hobbySummary.filter(
			(hobby) => hobby.title !== excludeTitle
		)
	} else {
		filtered = hobbySummary
	}

	return (
		<SectionContainer twClasses="py-20">
			<SectionTitle sectionTitle="See other passions" />
			<div className="mx-auto grid grid-cols-1 gap-6 pya-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{filtered.map((hobby) => (
					<Link
						legacyBehavior
						href={`/hobbies/${convertTextToUrl(hobby.title)}`}
						key={hobby.title}
					>
						<a>
							<OverviewCard entry={hobby} />
						</a>
					</Link>
				))}
			</div>
		</SectionContainer>
	)
}

export default HobbySummary
