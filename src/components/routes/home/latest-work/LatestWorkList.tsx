import SectionContainer from '@/components/ui/SectionContainer'
import CardHighlightClass from '@/utils/data-models/CardHighlightClass'
import React from 'react'

import LatestWorkItem from './LatestWorkItem'

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
				<LatestWorkItem
					img={latestWork.img}
					title={latestWork.title}
					overview={latestWork.overview}
					workCompany={latestWork.workCompany}
					position={latestWork.position}
					key={latestWork.title}
				/>
			))}
		</div>
	)
}

export default LatestWorkList
