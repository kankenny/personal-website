import React from 'react'

import Card from '@/components/ui/Card'
import OverviewCard from '@/components/ui/OverviewCard'

type Props = {
	img: string
	title: string
	overview: string
	workCompany: string
	position: string
}

const WorkCard = ({ img, title, overview, workCompany, position }: Props) => {
	return (
		<OverviewCard
			img={img}
			title={title}
			overview={overview}
			workCompany={workCompany}
			position={position}
		/>
	)
}

export default WorkCard
