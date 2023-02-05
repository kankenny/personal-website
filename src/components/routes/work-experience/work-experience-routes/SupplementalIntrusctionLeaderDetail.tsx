import React from 'react'

import Detail from '@/components/layout/body/detail/Detail'
import DetailSection from '@/components/layout/body/detail/DetailSection'

import details from '@/data/work-experience-data/supplementalInstructionLeaderData'

const SupplementalInstructionLeaderDetail = () => {
	return (
		<Detail title="Supplemental Instruction Leader - Calculus II">
			{details.map((detail, index) => {
				return <DetailSection key={index} detail={detail} />
			})}
		</Detail>
	)
}

export default SupplementalInstructionLeaderDetail
