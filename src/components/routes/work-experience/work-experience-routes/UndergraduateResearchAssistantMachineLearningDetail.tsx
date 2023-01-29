import React from 'react'

import Detail from '@/components/layout/body/detail/Detail'
import DetailSection from '@/components/layout/body/detail/DetailSection'

import details from '@/data/work-experience-data/uraMachineLearningData'

const UndergraduateResearchAssistantMachineLearningDetail = () => {
	return (
		<Detail title="Undergraduate Research Assistant - Machine Learning">
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

export default UndergraduateResearchAssistantMachineLearningDetail
