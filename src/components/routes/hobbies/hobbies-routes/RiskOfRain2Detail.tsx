import React from 'react'

import Detail from '@/components/layout/body/detail/Detail'
import DetailSection from '@/components/layout/body/detail/DetailSection'

import details from '@/data/hobbies-data/riskOfRain2Data'

const RiskOfRain2Detail = () => {
	return (
		<Detail title="Risk of Rain 2">
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

export default RiskOfRain2Detail
