import React from 'react'

import Detail from '@/components/layout/body/detail/Detail'
import DetailSection from '@/components/layout/body/detail/DetailSection'

import details from '@/data/work-experience-data/uraPhysicsData'

const UndergraduateResearchAssistantPhysicsDetail = () => {
	return (
		<Detail title="Undergraduate Research Assistant - Physics">
			{details.map((detail, index) => {
				return <DetailSection key={index} detail={detail} />
			})}
		</Detail>
	)
}

export default UndergraduateResearchAssistantPhysicsDetail
