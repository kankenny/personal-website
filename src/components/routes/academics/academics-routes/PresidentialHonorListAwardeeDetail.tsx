import React from 'react'

import Detail from '@/components/layout/body/detail/Detail'
import DetailSection from '@/components/layout/body/detail/DetailSection'

import details from '@/data/academics-data/presidentialHonorListAwardeeData'

const PresidentialHonorListAwardeeDetail = () => {
	return (
		<Detail title="Presidential Honor List Awardee">
			{details.map((detail, index) => {
				return <DetailSection key={index} detail={detail} />
			})}
		</Detail>
	)
}

export default PresidentialHonorListAwardeeDetail
