import React from 'react'
import Link from 'next/link'

// Components
import OverviewCard from '@/components/ui/OverviewCard'

// Utility Functions
import convertTextToUrl from '@/utils/lib/convertTextToUrl'

// Hard Coded Data
import latestWorkList from '@/data/LATEST_WORK'

const LatestWorkList = () => {
	return (
		<div className="mx-auto grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{latestWorkList.map((latestWork) => (
				<Link
					key={latestWork.title}
					href={`/work-experience/${convertTextToUrl(
						latestWork.title
					)}`}
					legacyBehavior
				>
					<a>
						<OverviewCard entry={latestWork} />
					</a>
				</Link>
			))}
		</div>
	)
}

export default LatestWorkList
