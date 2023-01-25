import React from 'react'
import Link from 'next/link'

// Components
import OverviewCard from '@/components/ui/OverviewCard'

// Utility Functions
import convertTextToUrl from '@/utils/lib/convertTextToUrl'

// Hard-coded Data
import highlightsList from '@/data/HIGHLIGHTS'

const HighlightsList = () => {
	return (
		<div className="mx-auto grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{highlightsList.map((highlight) => (
				<Link
					key={highlight.title}
					href={`/work-experience/${convertTextToUrl(
						highlight.title
					)}`}
					legacyBehavior
				>
					<a>
						<OverviewCard entry={highlight} />
					</a>
				</Link>
			))}
		</div>
	)
}

export default HighlightsList
