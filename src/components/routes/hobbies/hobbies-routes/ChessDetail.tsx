import Detail from '@/components/layout/body/detail/Detail'
import DetailSection from '@/components/layout/body/detail/DetailSection'
import React from 'react'

const dummyImage = 'https://unsplash.com/photos/sf_1ZDA1YFw'

const ChessDetail = () => {
	const details = [
		{
			title: 'Test',
			img: dummyImage,
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quidem numquam quod omnis reiciendis necessitatibus reprehenderit corporis optio consequuntur possimus ipsa accusantium labore totam doloribus dolorem iste architecto odit eos dolore vitae, facere quo nisi at expedita! Iure nisi quidem adipisci hic et veniam dicta vero? Unde sed error facere.',
		},
		{
			title: 'Test',
			img: dummyImage,
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quidem numquam quod omnis reiciendis necessitatibus reprehenderit corporis optio consequuntur possimus ipsa accusantium labore totam doloribus dolorem iste architecto odit eos dolore vitae, facere quo nisi at expedita! Iure nisi quidem adipisci hic et veniam dicta vero? Unde sed error facere.',
		},
		{
			title: 'Test',
			img: dummyImage,
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quidem numquam quod omnis reiciendis necessitatibus reprehenderit corporis optio consequuntur possimus ipsa accusantium labore totam doloribus dolorem iste architecto odit eos dolore vitae, facere quo nisi at expedita! Iure nisi quidem adipisci hic et veniam dicta vero? Unde sed error facere.',
		},
		{
			title: 'Test',
			img: dummyImage,
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quidem numquam quod omnis reiciendis necessitatibus reprehenderit corporis optio consequuntur possimus ipsa accusantium labore totam doloribus dolorem iste architecto odit eos dolore vitae, facere quo nisi at expedita! Iure nisi quidem adipisci hic et veniam dicta vero? Unde sed error facere.',
		},
	]

	return (
		<Detail title="Chess">
			{details.map((detail, index) => {
				return (
					<DetailSection
						key={index}
						detail={detail}
						workType="projects"
					/>
				)
			})}
		</Detail>
	)
}

export default ChessDetail
