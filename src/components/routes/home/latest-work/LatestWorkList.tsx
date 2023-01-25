import React from 'react'

import OverviewCard from '@/components/ui/OverviewCard'
import CardHighlightClass from '@/utils/data-models/CardHighlightClass'
import Link from 'next/link'
import convertTextToUrl from '@/utils/lib/convertTextToUrl'

const latestWorkList = [
	new CardHighlightClass(
		'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1024px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg',
		'Cat1',
		'Hobby',
		'Somewhere',
		'Doggy'
	),
	new CardHighlightClass(
		'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1024px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg',
		'Cat2',
		'Hobby',
		'Somewhere',
		'Doggy'
	),
	new CardHighlightClass(
		'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1024px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg',
		'Cat3',
		'Hobby',
		'Somewhere',
		'Doggy'
	),
]

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
						<OverviewCard
							img={latestWork.img}
							title={latestWork.title}
							overview={latestWork.overview}
							workCompany={latestWork.workCompany}
							position={latestWork.position}
							key={latestWork.title}
						/>
					</a>
				</Link>
			))}
		</div>
	)
}

export default LatestWorkList
