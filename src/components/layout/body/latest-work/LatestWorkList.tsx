import LatestWorkClass from '@/utils/data-models/LatestWorkClass'
import React from 'react'
import LatestWorkItem from './LatestWorkItem'

const latestWorkList = [
	new LatestWorkClass(
		'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1024px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg',
		'Cat1',
		'Hobby'
	),
	new LatestWorkClass(
		'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1024px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg',
		'Cat2',
		'Academic'
	),
	new LatestWorkClass(
		'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1024px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg',
		'Cat3',
		'Industry'
	),
]

const LatestWorkList = () => {
	return (
		<ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-6 justify-center">
			{latestWorkList.map((latestWork) => (
				<LatestWorkItem
					img={latestWork.img}
					title={latestWork.title}
					workType={latestWork.workType}
					key={latestWork.title}
				/>
			))}
		</ul>
	)
}

export default LatestWorkList
